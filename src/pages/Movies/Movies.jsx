import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_URL } from 'utils';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!query.length) return;

    const res = await axios.get(`${API_URL}/search/movie?query=${query}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const { data } = res;
    console.log(data);

    setResults(data.results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setQuery(e.target.value)}
          value={query}
          type="text"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {!results.length ? (
          <p>Movie with that name not found!</p>
        ) : (
          results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
