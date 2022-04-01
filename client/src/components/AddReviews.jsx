import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../globals";

const AddRev = (props) => {
  const trilogyId = props.id;
  const navigate = useNavigate();
  async function getReviews() {
    let res = await axios.post(
      `${BASE_URL}/movies/review/${encodeURIComponent(trilogyId)}`
    );
    let selectedReviews = [];
    res.data.reviews.forEach(() => {
      if (props.reviews.trilogy_id === props.trilogy_id) {
        selectedReviews.push();
      }
    });
    props.setReviews(selectedReviews);
    console.log(props.reviews);
  }

  props.setCreateRev(props.res.data.comment);
  console.log(props.res.data);

  getReviews();

  return (
    <div className="reviewTitle">
      <h1>Add a Review</h1>
      <form>
        <input type="text" name={"comment"} placeholder={"Make a Comment"} />
        <input type="text" name={"rating"} placeholder={"1-5"} />
        <input type="text" name={"creator"} placeholder={"Name"} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddRev;
