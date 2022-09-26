import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import HaluHalo from "./components/HaluHalo/HaluHalo";
import PaletaPop from "./components/PaletaPop/PaletaPop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Haluhalo" exact element={<HaluHalo />} />
        <Route path="/Paletapop" exact element={<PaletaPop />} />
      </Routes>
    </div>
  );
}

export default App;
