import React from "react";
import { MdSearch } from "react-icons/md";
import "./elements.css";

const Search = ({ val, inputConverter }) => {
  return (
    <div className="search-container">
      <input
        id="movie"
        className="search-bar"
        type="text"
        value={val}
        onChange={inputConverter}
        placeholder="Search a Movie..."
      />
      <MdSearch className="search" size={30} />
    </div>
  );
};

export default Search;
