import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
  });
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
