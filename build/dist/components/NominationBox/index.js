import React, {useContext} from "../../../_snowpack/pkg/react.js";
import "./elements.css.proxy.js";
import Button from "../Button/index.js";
import {MovieContext} from "../../App.js";
const NominatedItem = ({item, key}) => {
  return /* @__PURE__ */ React.createElement("li", {
    key
  }, item.title, " (", item.year, ")", /* @__PURE__ */ React.createElement(Button, {
    title: "Remove",
    item
  }));
};
const NominationBox = () => {
  const nomination = useContext(MovieContext);
  return /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("ul", null, nomination.nominate.length > 0 ? nomination.nominate.map((item, key) => /* @__PURE__ */ React.createElement(NominatedItem, {
    item,
    key
  })) : /* @__PURE__ */ React.createElement("li", null, "There isn't any nomination yet")));
};
export default NominationBox;
