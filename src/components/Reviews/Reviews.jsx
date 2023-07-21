import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from 'utils';

export function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const res = await axios.get(`${API_URL}/movie/${id}/reviews`, {
        params: {
          api_key: API_KEY,
        },
      });

      const { data } = res;

      setReviews(data.results);
    };
    getMovieReviews();
  }, [id]);

  return (
    <div>
      <ul>
        {!reviews.length
          ? 'No reviews found for that movie!'
          : reviews.map(review => (
              <li key={review.id}>
                <h5>
                  <em>{review.author}</em>
                </h5>
                <p>{review.content}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}
