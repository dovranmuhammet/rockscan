import RockList from "./components/RockList/RockList";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rocks" element={<RockList />} />
      </Routes>
    </div>
  );
}

export default App;
