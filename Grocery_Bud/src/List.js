import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, deleteItem, editItem }) => {
  console.log(items);
  return (
    <div className="grocery-list">
      {items.map((curr) => {
        return (
          <div key={curr.id} className="grocery-item">
            <p className="title"> {curr.title}</p>
            <div className="button-contaniner">
              <button className="edit-btn" onClick={() => editItem(curr.id)}>
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteItem(curr.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
