// import react from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import "../App.css";
import { useParams } from "react-router-dom";
import LeaveReview from "../components/LeaveReviews";
import "./trilogy.css";
const Trilogy = (props) => {
  const trilogyId = props.id;
  const [movies, setMovie] = useState([]);
  const [rev, setRev] = useState([]);
  const [createRev, setCreateRev] = useState([]);
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

  useEffect(() => {
    getMoviesByTrilogy();
    return () => {
      isCancelled = true;
    };
  }, [trilogyId]);

  console.log("movies", movies);
  console.log("rev", rev);

  const submitHandlerPost = async (review) => {
    review.trilogyId = trilogyId;
    await axios.post(`${BASE_URL}/movies/review`, review);
    console.log(review);
    await getMoviesByTrilogy();
  };

  const submitHandlerUpdate = async (review) => {
    console.log(review);
    await axios.put(`${BASE_URL}/movies/review/${review.reviewsId}`, review);

    await getMoviesByTrilogy();
  };

  const deleteReviewHandler = async (review) => {
    console.log(review);
    // review.trilogyId = trilogyId;
    await axios.delete(`${BASE_URL}/movies/review/${review._id}`);
    await getMoviesByTrilogy();
  };

  return (
    <div
      className="this"
      style={{
        display: "flex",
        padding: 60,
        margin: 50,
        // flexWrap: "wrap",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <h1>{trilogyId}</h1>
      <ul className="movieList">
        {movies.map((movie) => (
          <div
            key={movie._id}
            style={{
              justifyContent: "center",
              margin: 40,
            }}
          >
            <li>{movie.name}</li>
          </div>
        ))}
      </ul>
      <div className="review-display">
        {rev.map((review) => (
          <div
            key={review._id}
            style={{
              justifyContent: "center",
              margin: 40,
            }}
          >
            "{review.comment}" - {review.creator}, rating: {review.rating}/5,{" "}
            {review._id}
            <button value={review} onClick={() => deleteReviewHandler(review)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="review-input-form">
        <LeaveReview type="submit" submitHandler={submitHandlerPost} />
        <LeaveReview type="update" submitHandler={submitHandlerUpdate} />
      </div>
      <div className="">{/* <UpdateReview /> */}</div>
    </div>
  );
};

export default Trilogy;
