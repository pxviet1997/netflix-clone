import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from '../api/axios';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
      }
      catch (err) {
        console.log('Row: ' + err);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    widht: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        ))}
      </div>
      <YouTube videoId={trailerUrl} opts={opts} />
    </div>

  );
};

export default Row;