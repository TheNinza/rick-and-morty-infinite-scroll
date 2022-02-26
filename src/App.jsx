import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Character from "./pages/character";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </div>
  );
};

export default App;
