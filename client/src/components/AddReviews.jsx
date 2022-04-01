import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../globals";

const AddRev = (props) => {
  const trilogyId = props.id;
  const navigate = useNavigate();
  async function getReviews() {
    try {
      let res = await axios.get(
        `${BASE_URL}/movies/reviews/${encodeURIComponent(trilogyId)}`
      );
      props.setCreateRev(res.data.review);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  getReviews();

  return (
    <div className="workoutTitle">
      <h1>Add a Review</h1>
      <form>
        <input type="text" name={"comment"} placeholder={"Make a Comment"} />
        <input type="text" name={"rating"} placeholder={"1-5"} />
        <input type="text" name={"user"} placeholder={"Name"} />
        <button>Submit</button>
      </form>
      <button
        onClick={() =>
          navigate(
            `${BASE_URL}/movies/reviews/${encodeURIComponent(trilogyId)}`
          )
        }
      >
        Back
      </button>
    </div>
  );
};

export default AddRev;
