import { Route, Routes } from "react-router-dom";
import "./App.css";
import Prequel from "./pages/prequel";

function App() {
  return (
    <div>
      <main className="prequel">
        <Routes>
          {/* // <Route path="" element={ } />
        // <Route path="" element={ } />
        // <Route path="" element={ } />} */}

          <Route path="/movies/trilgoies" element={<Prequel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
