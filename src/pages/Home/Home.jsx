import React, { useEffect, useState } from 'react';

import { API_URL } from 'utils';
import { Loader } from 'components/Loader/Loader';
import { fetchData } from 'services/fetchAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(
      `${API_URL}/trending/movie/day`,
      setMovies,
      setIsLoading,
      'results'
    );
  }, []);

  return (
    <div className="container">
      <h1>Trending Today!</h1>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}
