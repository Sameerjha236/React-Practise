import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, image, info, price } = props.place;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>Read More</button>
        </p>
        <button onClick={() => props.filterTour(id)} className="delete-btn">
          Not Intrested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
