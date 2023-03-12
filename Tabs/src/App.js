import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Details from "./Details";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(0);

  const getData = async () => {
    setLoading(true);
    const db = await fetch(url);
    const response = await db.json();
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const buttonHandler = (id) => {
    //find index  find
    const ind = data.findIndex((curr) => curr.id === id);
    setShow(ind);
  };
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {data.map((curr) => {
          return (
            <button
              className={
                data[show].id === curr.id ? "job-btn active-btn" : "job-btn"
              }
              key={curr.id}
              onClick={() => buttonHandler(curr.id)}
            >
              {curr.company}
            </button>
          );
        })}
      </div>
      <Details data={data} ind={show} />
    </div>
  );
}

export default App;
