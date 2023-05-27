import React, { useState } from "react";
import rockData from "./rocks.json";

// Assuming that you have a list of 500 rocks
const rockList = [
  // ... your list of rocks
];

const Rock = ({ rock }) => (
  <div style={{ margin: "20px", padding: "10px", border: "1px solid black" }}>
    <h2>{rock.name}</h2>
    <p>{rock.description}</p>
    {/* Add more rock details here */}
  </div>
);

const RockList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRocks = rockData.filter((rock) =>
    rock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rock-list">
      <input
        type="text"
        placeholder="Search for a rock..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />
      <p>{filteredRocks.length} Rocks</p>
      {filteredRocks.map((rock) => (
        <Rock key={rock.name} rock={rock} />
      ))}
    </div>
  );
};

export default RockList;
