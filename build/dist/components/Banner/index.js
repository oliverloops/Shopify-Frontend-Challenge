import React, {useContext} from "../../../_snowpack/pkg/react.js";
import "./elements.css.proxy.js";
import {MovieContext} from "../../App.js";
const Banner = () => {
  const action = useContext(MovieContext);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, action.nominate.length === 5 ? /* @__PURE__ */ React.createElement("div", {
    className: "banner"
  }, /* @__PURE__ */ React.createElement("p", null, "You've added 5 nominations!\xA0", /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "star"
  }, "\u2B50\uFE0F"))) : /* @__PURE__ */ React.createElement(React.Fragment, null));
};
export default Banner;
