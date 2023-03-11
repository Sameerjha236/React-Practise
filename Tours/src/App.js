import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const filterTour = (id) => {
    const newTour = tour.filter((curr) => curr.id !== id);
    setTour(newTour);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setTour(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours filterTour={filterTour} tour={tour} />
    </main>
  );
}

export default App;
