import React, { useState } from "react";
import Categories from "./Categories";
const Menu = (props) => {
  const items = props.items;
  const [show, setShow] = useState(0);
  const variety = ["All", "breakfast", "lunch", "shakes"];
  return (
    <div className="menu">
      <header>
        <h2 className="title">Our Menu</h2>
        <div className="underline" style={{ marginBottom: "2rem" }}></div>
      </header>
      <div className="btn-container">
        <button className="filter-btn" onClick={() => setShow(0)}>
          All
        </button>
        <button className="filter-btn" onClick={() => setShow(1)}>
          BreakFast
        </button>
        <button className="filter-btn" onClick={() => setShow(2)}>
          Lunch
        </button>
        <button className="filter-btn" onClick={() => setShow(3)}>
          Shakes
        </button>
      </div>
      {show === 0 ? (
        <Categories items={items} show={show} />
      ) : (
        <Categories
          show={show}
          items={items.filter((item) => item.category === variety[show])}
        />
      )}
    </div>
  );
};

export default Menu;
