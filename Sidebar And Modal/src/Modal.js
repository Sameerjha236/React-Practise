import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { modal, setModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${modal ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={() => setModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
