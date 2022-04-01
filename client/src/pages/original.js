// import react from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import "../App.css";
import { useParams } from "react-router-dom";
import ReviewActions from "../components/Reviews";

const Original = () => {
  const [movies, setMovie] = useState([]);
  let { trilogyId } = useParams();
  useEffect(() => {
    let isCancelled = false;
    const getMoviesByTrilogy = async () => {
      const res = await axios.get(
        `${BASE_URL}/movies/trilogies/Original%20Trilogy`
      );
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
  console.log(movies);
  return (
    <div className="this">
      <h1> Original Trilogy</h1>
      <ul>
        {movies.map((movie) => (
          <div>
            <li>{movie.name}</li>

            {movie.review.map((review) => (
              <ReviewActions review={review} />
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Original;
