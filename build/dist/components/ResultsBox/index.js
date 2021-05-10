import React, {useState} from "../../../_snowpack/pkg/react.js";
import {FiInfo} from "../../../_snowpack/pkg/react-icons/fi.js";
import "./elements.css.proxy.js";
import "./hovercard.css.proxy.js";
import Button from "../Button/index.js";
const InfoButton = ({setOn}) => {
  const showPlot = () => {
    setOn(true);
    console.log("showPlot");
  };
  const hidePlot = () => {
    setOn(false);
    console.log("hidePlot");
  };
  return /* @__PURE__ */ React.createElement("button", {
    className: "info-button",
    onMouseEnter: () => showPlot(),
    onMouseLeave: () => hidePlot()
  }, /* @__PURE__ */ React.createElement(FiInfo, {
    size: 19,
    style: {color: "rgba(0,0,0,0.4)"}
  }));
};
const ListElement = ({item, id}) => {
  const [on, setOn] = useState(false);
  return /* @__PURE__ */ React.createElement("li", {
    key: id
  }, item.title, " (", item.year, ")", on && /* @__PURE__ */ React.createElement("div", {
    className: "plotbox"
  }, /* @__PURE__ */ React.createElement("p", null, item.plot)), /* @__PURE__ */ React.createElement(InfoButton, {
    setOn
  }), /* @__PURE__ */ React.createElement(Button, {
    title: "Nominate",
    item
  }));
};
const ResultsBox = ({store}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("ul", null, store.length > 0 ? store.map((item, id) => /* @__PURE__ */ React.createElement(ListElement, {
    item,
    id
  })) : /* @__PURE__ */ React.createElement("li", null, "Here you'll see the results")));
};
export default ResultsBox;
