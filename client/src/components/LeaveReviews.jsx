import React, { useState } from "react";

const LeaveReview = (props) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [creator, setCreator] = useState("");
  const [reviewsId, setReviewsId] = useState("");

  const onClickHandler = () => {
    props.submitHandler({
      comment,
      creator,
      rating,
      reviewsId,
    });
  };

  const onClickHandler3 = () => {
    props.submitHandler2({
      comment,
      creator,
      rating,
      reviewsId,
    });
  };

  return (
    <div className="reviewTitle">
      <h1>Leave A Review</h1>
      {/* <form> */}
      <input
        type="text"
        name="comment"
        placeholder="Make a Comment"
        value={comment}
        onChange={(v) => setComment(v.target.value)}
      />
      <input
        type="number"
        name="rating"
        placeholder="1-5"
        value={rating}
        onChange={(v) => setRating(v.target.value)}
      />
      <input
        type="text"
        name="creator"
        placeholder="Name"
        value={creator}
        onChange={(v) => setCreator(v.target.value)}
      />

      <input
        type="text"
        name="reviewId"
        placeholder="reviewId"
        value={reviewsId}
        onChange={(v) => setReviewsId(v.target.value)}
      />

      <button onClick={onClickHandler}>Submit</button>
      <button onClick={onClickHandler3}>Update</button>

      {/* </form> */}
    </div>
  );
};

export default LeaveReview;
