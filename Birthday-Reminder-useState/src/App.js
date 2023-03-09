import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button className="btn" onClick={() => setPeople([])}>
        {" "}
        Clear All
      </button>
      <button className="btn" onClick={() => setPeople(data)}>
        {" "}
        Reset All
      </button>
    </div>
  );
}

export default App;
