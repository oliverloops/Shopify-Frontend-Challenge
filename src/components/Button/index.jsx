import React, { useState, useContext } from "react";
import "./elements.css";
//Context API
import { MovieContext } from "../../App";

const Button = ({ title, item }) => {
  const [disable, setDisable] = useState(false);
  const action = useContext(MovieContext);

  //Method to add a movie to nominations list
  const addMovie = (movie) => {
    action.setNominate((i) => [...i, movie]);
    setDisable(true);
    //sessionStorage.setItem(movie.title, JSON.stringify(action.nominate));
  };

  //Method to remove a movie to nominations list
  const removeMovie = (movie) => {
    action.setNominate(action.nominate.filter((i) => i.title !== movie.title));
    setDisable(false);
    //sessionStorage.removeItem(movie.title);
  };

  // logic to enable/disable buttons
  return title === "Nominate" ? (
    <button
      className={`${!disable ? "active-button" : "unactive-button"}`}
      disabled={disable}
      onClick={() => addMovie(item)}
    >
      {title}
    </button>
  ) : (
    <button className="remove-button" onClick={() => removeMovie(item)}>
      {title}
    </button>
  );
};

export default Button;
