import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    console.log("First ", index);
    const lastIndex = people.length - 1;
    if (index > lastIndex) setIndex(0);
    else if (index < 0) setIndex(lastIndex);
  }, [index, people]);

  useEffect(() => {
    console.log();
    console.log("Second ", index);
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, ind) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (ind === index) {
            position = "activeSlide";
          } else if (
            ind === index - 1 ||
            (index === 0 && ind === people.length - 1)
          )
            position = "lastSlide";
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </main>
  );
}

export default App;
