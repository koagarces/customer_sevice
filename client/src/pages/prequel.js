// import react from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import { useParams, Link } from "react-router-dom";
import "../App.css";

const Prequel = () => {
  const [movies, setMovie] = useState([]);

  let { trilogyId } = useParams();

  useEffect(() => {
    let isCancelled = false;
    const getMoviesByTrilogy = async () => {
      const res = await axios.get(`${BASE_URL}/movies/trilogies`);

      if (!isCancelled) {
        console.log(res.data);
        setMovie(res.data);
      }
    };
    getMoviesByTrilogy();
    return () => {
      isCancelled = true;
    };
  }, [trilogyId]);
  console.log(res.data);
  return (
    <div className="this">
      <ul>
        {movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prequel;
