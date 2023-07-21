import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMG_URL } from 'utils';

export function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const res = await axios.get(`${API_URL}/movie/${id}/credits`, {
        params: {
          api_key: API_KEY,
        },
      });

      const { data } = res;

      setCast(data.cast);
    };
    getMovieReviews();
  }, [id]);

  return (
    <div>
      <ul>
        {cast.map(person => (
          <li key={person.name}>
            <img
              width={100}
              src={`${IMG_URL}${person.profile_path}`}
              alt={person.name}
            />
            <p>{person.name}</p>
            <p>Character: {person.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
