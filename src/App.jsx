import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/home";
import Start from "./components/pages/start";
import Register from "./components/pages/registration";
import Dark from "./components/pages/dark";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dark" element={<Dark />} />
      <Route path="/" element={<Start />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
