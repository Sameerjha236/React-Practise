import React from "react";

const Categories = (props) => {
  const items = props.items;
  console.log(items);
  return (
    <div className="section-center">
      {items.map((items) => {
        return (
          <div key={items.id} className="menu-item">
            <img src={items.img} alt={items.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{items.title}</h4>
                <h4 className="price">{items.price}</h4>
              </header>
              <p className="item-text">{items.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
