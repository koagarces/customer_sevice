// import react from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import "../App.css";
import { useParams, Link } from "react-router-dom";

const Original = () => {
  const [movies, setMovie] = useState([]);
  let { trilogyId } = useParams();
  useEffect(() => {
    let isCancelled = false;
    const getMoviesByTrilogy = async () => {
      const res = await axios.get(`${BASE_URL}/movies/trilogies/originals`);
      console.log(res.data);
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

  return (
    <div className="this">
      <h1> Original Trilogy</h1>
      <ul>
        {movies.map((movie) => (
          <li>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Original;
