import { NavLink } from "react-router-dom";
import "../home.css";

const Home = () => {
  console.log("yes");

  return (
    <main>
      <div>this is the home page</div>
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
