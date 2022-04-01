import { NavLink } from "react-router-dom";
import "../home.css";
import "../components/Reviews";
const Home = () => {
  return (
    <main>
      <h1>STAR WARS TRILOGY REVIEW</h1>
      <div>
        <NavLink to="/movies/trilogies/prequels" className="navigation">
          Prequel Trilogy
        </NavLink>
        <NavLink to="/movies/trilogies/originals" className="navigation">
          Original Trilogy
        </NavLink>
        <NavLink to="/movies/trilogies/sequels" className="navigation">
          Sequel Trilogy
        </NavLink>
      </div>
    </main>
  );
};
export default Home;
