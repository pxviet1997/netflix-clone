import { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../requests';

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="banner">
      <header> {/* Background image */}
        {/* title */}
        {/* 2 buttons */}
        {/* description */}
      </header>
    </div>
  );
};

export default Banner;