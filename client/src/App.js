import { Route, Routes } from "react-router-dom";
import "./App.css";
import Prequel from "./pages/prequel";
import Sequel from "./pages/sequel";
import Original from "./pages/original";

function App() {
  return (
    <div>
      <main className="prequel">
        <Routes>
          {/* // <Route path="" element={ } /> */}
          <Route path="/movies/trilogies/originals" element={<Original />} />
          <Route path="/movies/trilogies/sequels" element={<Sequel />} />
          <Route path="/movies/trilogies/prequels" element={<Prequel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
