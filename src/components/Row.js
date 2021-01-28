import { useState, useEffect } from 'react';
import axios from '../api/axios';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        console.log(response);
        setMovies(response.data.results);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        ))}
      </div>
    </div>
  );
};

export default Row;