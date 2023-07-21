import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from 'utils';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const res = await axios.get(`${API_URL}/trending/movie/day`, {
        params: {
          api_key: API_KEY,
        },
      });
      const { data } = res;

      setMovies(data.results);
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today!</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
