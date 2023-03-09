import React from "react";
const Person = (props) => {
  return (
    <article key={props.id} className="person">
      <img src={props.image} alt="" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.age} years</p>
      </div>
    </article>
  );
};
export default Person;
