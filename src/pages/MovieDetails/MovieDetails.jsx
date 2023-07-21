import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY, API_URL, IMG_URL } from 'utils';

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const { title, overview, genres, vote_average, release_date, poster_path } =
    movie;

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      });

      const { data } = res;

      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <picture>
          <img width={200} src={`${IMG_URL}${poster_path}`} alt="" />
        </picture>
        <div>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User Score: {(vote_average * 10).toFixed()}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres?.map(genre => (
            <span key={genre.name}>{genre.name}</span>
          ))}
        </div>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
