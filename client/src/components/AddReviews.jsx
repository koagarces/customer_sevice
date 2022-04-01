import React, { useState } from "react";

const AddRev = (props) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [creator, setCreator] = useState("");

  // const trilogyId = props.id;
  // const navigate = useNavigate();
  // async function getReviews() {
  //   let res = await axios.post(
  //     `${BASE_URL}/movies/review/${encodeURIComponent(trilogyId)}`
  //   );
  //   let selectedReviews = [];
  //   res.data.reviews.forEach(() => {
  //     if (props.reviews.trilogy_id === props.trilogy_id) {
  //       selectedReviews.push();
  //     }
  //   });
  //   props.setReviews(selectedReviews);
  //   console.log(props.reviews);
  // }

  // props.setCreateRev(props.res.data.comment);
  // console.log(props.res.data);

  // getReviews();

  const onClickHandler = () => {
    props.submitHandler({
      comment,
      creator,
      rating,
    });
  };
  const onClickHandler2 = (props) => {
    props.deleteHandler({
      comment,
      creator,
      rating,
    });
  };

  return (
    <div className="reviewTitle">
      <h1>Add a Review</h1>
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
      <button onClick={onClickHandler}>Submit</button>

      {/* </form> */}
    </div>
  );
};

export default AddRev;
