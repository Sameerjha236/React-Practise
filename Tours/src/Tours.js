import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <div>
      <div className="title">
        <h2>Our Tours {props.tour.length}</h2>
        <div className="underline"></div>
      </div>
      {props.tour.map((place) => {
        const { id } = place;
        return <Tour key={id} place={place} filterTour={props.filterTour} />;
      })}
    </div>
  );
};

export default Tours;
