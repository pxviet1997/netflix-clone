import { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../requests';

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
    > {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        {/* 2 buttons */}
        {/* description */}
      </div>

    </header>
  );
};

export default Banner;