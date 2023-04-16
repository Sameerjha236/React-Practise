import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { setModal, setSide } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars onClick={() => setSide(true)} />
      </button>
      <button className="btn" onClick={() => setModal(true)}>
        Show Model
      </button>
    </main>
  );
};

export default Home;
