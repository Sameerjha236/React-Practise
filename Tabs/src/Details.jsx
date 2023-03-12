import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const Details = (props) => {
  const ind = props.ind;
  const data = props.data;
  return (
    <div className="job-info">
      <h3>{data[ind].title}</h3>
      <h4>{data[ind].company}</h4>
      <p className="job-date">{data[ind].dates}</p>

      {data[ind].duties.map((duty) => {
        return (
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
