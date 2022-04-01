import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Trilogy from "./pages/trilogy";

function App() {
  return (
    <div className="body">
      <main className="prequel">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies/trilogies/originals"
            element={<Trilogy id="Original Trilogy" />}
          />
          <Route
            path="/movies/trilogies/sequels"
            element={<Trilogy id="Sequel Trilogy" />}
          />
          <Route
            path="/movies/trilogies/prequels"
            element={<Trilogy id="Prequel Trilogy" />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
