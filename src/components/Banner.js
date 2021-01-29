import { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[Math.floor(Math.random() * (response.data.results.length - 1))]
        );
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  // console.log(movie);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <div className="banner-description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>

      <div className="banner-fadeBottom" />

    </header>
  );
};

export default Banner;