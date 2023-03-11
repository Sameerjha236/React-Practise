import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [position, setPosition] = useState(0);

  const randomPos = () => {
    let pos = Math.floor(Math.random() * people.length);
    setPosition(pos);
  };
  const person = people[position];
  return (
    <div className="container">
      <div className="review">
        <div className="img-container">
          <img src={person.image} className="person-img" alt={person.name} />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h3 className="author">{person.name}</h3>
        <h3 className="job">{person.job}</h3>
        <div className="info">{person.text}</div>
        <div>
          <button
            className="prev-btn"
            onClick={() => {
              let pos = position;
              if (position === 0) pos = people.length - 1;
              else pos = position - 1;
              setPosition(pos);
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              let pos = (position + 1) % people.length;
              setPosition(pos);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPos} className="random-btn">
          Suprise Me
        </button>
      </div>
    </div>
  );
};

export default Review;
