import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
import "./elements.css.proxy.js";
const FutureBox = ({val}) => {
  const randomizer = ["A", "C", "D", "S", "K", "Y", "E", "G", "O", "T", "W"];
  const [movies, setMovies] = useState([]);
  const getRequest = () => {
    fetch(`https://www.omdbapi.com/?t=${randomizer[Math.round(Math.random() * 10)]}&type=movie&y=2021&apikey=eeaaab8b`).then((res) => res.json()).then((data) => {
      setMovies((i) => [...i, {title: data.Title, year: data.Year}]);
    });
  };
  useEffect(() => {
    for (let x = 0; x < 3; x++) {
      getRequest();
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("ul", null, movies.length > 0 ? movies.map((item, id) => /* @__PURE__ */ React.createElement("li", {
    key: id
  }, item.title, " (", item.year, ")")) : /* @__PURE__ */ React.createElement("li", {
    className: "lds-dual-ring loader"
  })));
};
export default FutureBox;
