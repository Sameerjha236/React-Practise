import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState(data);
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = document.getElementById("amount").value;
    setValue(val);
  };
  return (
    <div className="section section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" id="amount" min="1" max="8" defaultValue={1} />
        <button type="submit">Generate</button>
      </form>
      {value > 0 && (
        <div className="result">
          {text.map((para, ind) => {
            if (ind < value) return <p>{para}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
