import React, {useState, useContext} from "../../../_snowpack/pkg/react.js";
import "./elements.css.proxy.js";
import {MovieContext} from "../../App.js";
const Button = ({title, item}) => {
  const [disable, setDisable] = useState(false);
  const action = useContext(MovieContext);
  const addMovie = (movie) => {
    action.setNominate((i) => [...i, movie]);
    setDisable(true);
  };
  const removeMovie = (movie) => {
    action.setNominate(action.nominate.filter((i) => i.title !== movie.title));
    setDisable(false);
  };
  return title === "Nominate" ? /* @__PURE__ */ React.createElement("button", {
    className: `${!disable ? "active-button" : "unactive-button"}`,
    disabled: disable,
    onClick: () => addMovie(item)
  }, title) : /* @__PURE__ */ React.createElement("button", {
    className: "remove-button",
    onClick: () => removeMovie(item)
  }, title);
};
export default Button;
