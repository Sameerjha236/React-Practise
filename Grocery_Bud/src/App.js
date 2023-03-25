import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else return [];
  };

  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "false",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        ...alert,
        show: true,
        msg: "Please Enter Value",
        type: "danger",
      });
    } else if (name && isEditing) {
      list[editID].title = name;
      setName("");
      setIsEditing(false);
      setEditID(null);
      setAlert({
        ...alert,
        show: true,
        msg: "Item Updated",
        type: "success",
      });
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setAlert({
        ...alert,
        show: true,
        msg: "Item Added",
        type: "success",
      });
    }
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setAlert({
      ...alert,
      show: true,
      msg: "Item Deleted",
      type: "danger",
    });
  };

  const editItem = (id) => {
    const ind = list.findIndex((item) => item.id === id);
    setEditID(ind);
    setIsEditing(true);
    setName("");
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} setAlert={setAlert} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} deleteItem={deleteItem} editItem={editItem} />
          <button
            className="clear-btn"
            onClick={() => {
              setList([]);
              setAlert({
                ...alert,
                show: true,
                msg: "All Items Removed",
                type: "success",
              });
            }}
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
