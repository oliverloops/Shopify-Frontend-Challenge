import React from "../../../_snowpack/pkg/react.js";
import {MdSearch} from "../../../_snowpack/pkg/react-icons/md.js";
import "./elements.css.proxy.js";
const Search = ({val, inputConverter}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "search-container"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "movie",
    className: "search-bar",
    type: "text",
    value: val,
    onChange: inputConverter,
    placeholder: "Search a Movie..."
  }), /* @__PURE__ */ React.createElement(MdSearch, {
    className: "search",
    size: 30
  }));
};
export default Search;
