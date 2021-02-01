import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from '../api/axios';
import './Row.css';

import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch(err => { console.log(err) });
    }
  }

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
            onClick={() => handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>

  );
};

export default Row;