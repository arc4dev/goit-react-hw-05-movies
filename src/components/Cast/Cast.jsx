import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from 'services/fetchAPI';
import { Loader } from 'components/Loader/Loader';
import { API_URL, IMG_PLACEHOLDER, IMG_URL } from 'utils';

export default function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(`${API_URL}/movie/${id}/credits`, setCast, setIsLoading, 'cast');
  }, [id]);

  const handleImageError = e => {
    e.target.src = IMG_PLACEHOLDER;
  };

  return (
    <div>
      <ul>
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          cast.map(person => (
            <li key={person.id}>
              <img
                width={100}
                src={`${IMG_URL}${person.profile_path}`}
                alt={person.name}
                onError={handleImageError}
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
