import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchFucntion = () => {
    setSearchTerm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Search Your Fav cocktail</label>
          <input
            id="name"
            ref={searchValue}
            type="text"
            onChange={searchFucntion}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
