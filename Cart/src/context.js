import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const defaultState = {
  loading: 0,
  cart: [],
  total: 0,
  cost: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getData = async () => {
    dispatch({ type: "loading" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "intialize", payload: data });
    dispatch({ type: "show" });
  };
  const remove = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  const clear = () => {
    dispatch({ type: "clear" });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    dispatch({ type: "getTotal" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        clear,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
