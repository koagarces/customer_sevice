// import react from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import "../App.css";
import { useParams } from "react-router-dom";
import AddRev from "../components/AddReviews";

const Trilogy = (props) => {
  const trilogyId = props.id;
  const [movies, setMovie] = useState([]);
  const [rev, setRev] = useState([]);
  const [createRev, setCreateRev] = useState([]);
  useEffect(() => {
    let isCancelled = false;

    const getMoviesByTrilogy = async () => {
      const res = await axios.get(
        `${BASE_URL}/movies/trilogies/${encodeURIComponent(trilogyId)}`
      );
      const reviewRes = await axios.get(
        `${BASE_URL}/movies/reviews/${encodeURIComponent(trilogyId)}`
      );
      console.log(reviewRes.data);
      console.log(res.data);
      if (!isCancelled) {
        console.log(res.data);
        setMovie(res.data);
        setRev(reviewRes.data);
      }
    };
    getMoviesByTrilogy();

    // createReviewsByTrilogy();
    return () => {
      isCancelled = true;
    };
  }, [trilogyId]);
  console.log(movies);
  console.log(rev);

  return (
    <div className="this">
      <h1>{trilogyId}</h1>
      <ul>
        {movies.map((movie) => (
          <div>
            <li>{movie.name}</li>
          </div>
        ))}
      </ul>
      <div>
        {rev.map((create) => (
        <div>
          <AddRev create={} setCreateRev={setCreateRev} />
        </div>
         ))} 
        {rev.map((review) => (
          <div>{rev.comment}</div>
        ))}
      </div>
    </div>
  );
};

export default Trilogy;
