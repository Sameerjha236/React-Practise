import React from "react";
import Element from "./element";
const List = (props) => {
  const people = props.people;
  return (
    <div>
      {people.map((person) => {
        return (
          <Element
            id={person.id}
            name={person.name}
            age={person.age}
            image={person.image}
          />
        );
      })}
    </div>
  );
};

export default List;
