import { useState, useEffect } from 'react';
import axios from '../api/axios';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  console.log(movies);


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {

        })}
      </div>
    </div>
  );
};

export default Row;