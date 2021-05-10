import React, {useState, useEffect, createContext} from "../_snowpack/pkg/react.js";
import {MdLocalMovies} from "../_snowpack/pkg/react-icons/md.js";
import {AiFillStar} from "../_snowpack/pkg/react-icons/ai.js";
import {IoIosRocket} from "../_snowpack/pkg/react-icons/io.js";
import "./App.css.proxy.js";
import Banner from "./components/Banner/index.js";
import Search from "./components/SearchBar/index.js";
import ResultsBox from "./components/ResultsBox/index.js";
import NominationBox from "./components/NominationBox/index.js";
import FutureBox from "./components/FutureBox/index.js";
import Header from "./layout/Header/index.js";
import Footer from "./layout/Footer/index.js";
export const MovieContext = createContext();
function App() {
  const [val, setVal] = useState("");
  const [showResult, setShowResult] = useState("");
  const [store, setStore] = useState([]);
  const [nominate, setNominate] = useState([]);
  const [disable, setDisable] = useState(false);
  for (let x = 0; x < nominate.length; x++) {
    console.log(sessionStorage.getItem(nominate[x].title));
  }
  const inputConverter = (event) => {
    setVal(event.target.value.toLowerCase().replace(/ /g, "+"));
    setShowResult(event.target.value);
  };
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${val}&type=movie&plot=short&apikey=eeaaab8b`).then((res) => res.json()).then((data) => {
      if (data.Response === "True") {
        setStore((i) => [
          ...i,
          {title: data.Title, year: data.Year, plot: data.Plot}
        ]);
      } else {
        setStore([]);
      }
    });
  }, [val, setVal]);
  let values = {
    nominate,
    setNominate,
    disable,
    setDisable
  };
  return /* @__PURE__ */ React.createElement(MovieContext.Provider, {
    value: values
  }, /* @__PURE__ */ React.createElement(Banner, null), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "search-content"
  }, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "movie",
    className: "titles"
  }, "Movie Title ", /* @__PURE__ */ React.createElement(MdLocalMovies, {
    size: 20
  })), /* @__PURE__ */ React.createElement(Search, {
    val: showResult,
    inputConverter
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "results"
  }, 'Results for: "', showResult, '"'), /* @__PURE__ */ React.createElement(ResultsBox, {
    store
  }))), /* @__PURE__ */ React.createElement("aside", {
    className: "nominations"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Nominations", /* @__PURE__ */ React.createElement(AiFillStar, {
    size: 20
  })), /* @__PURE__ */ React.createElement(NominationBox, null), /* @__PURE__ */ React.createElement("h3", null, "Upcoming Movies", /* @__PURE__ */ React.createElement(IoIosRocket, null)), /* @__PURE__ */ React.createElement(FutureBox, null)))), /* @__PURE__ */ React.createElement(Footer, null));
}
export default App;
