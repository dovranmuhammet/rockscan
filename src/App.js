import RockList from "./components/RockList/RockList";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rocks" element={<RockList />} />
      </Routes>
    </div>
  );
}

export default App;
