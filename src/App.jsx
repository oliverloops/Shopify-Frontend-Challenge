import React, { useState, useEffect, createContext } from "react";
import { MdLocalMovies } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import "./App.css";
//UI components
import Banner from "./components/Banner";
import Search from "./components/SearchBar";
import ResultsBox from "./components/ResultsBox";
import NominationBox from "./components/NominationBox";
import FutureBox from "./components/FutureBox";
//Layout Components
import Header from "./layout/Header";
import Footer from "./layout/Footer";

//API Key: "http://www.omdbapi.com/?i=tt3896198&apikey=eeaaab8b"
//Context API
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
    /* Parsing string to lower case and applying 
    a regular expresion to parse global spaces to "+" */
    setVal(event.target.value.toLowerCase().replace(/ /g, "+"));
    setShowResult(event.target.value);
  };

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?t=${val}&type=movie&plot=short&apikey=eeaaab8b`
    )
      .then((res) => res.json())
      .then((data) => {
        /* if input is valid save all related result otherwise reset it. */
        if (data.Response === "True") {
          setStore((i) => [
            ...i,
            { title: data.Title, year: data.Year, plot: data.Plot },
          ]);
        } else {
          setStore([]);
        }
      });
  }, [val, setVal]);

  let values = {
    nominate: nominate,
    setNominate: setNominate,
    disable: disable,
    setDisable: setDisable,
  };

  return (
    <MovieContext.Provider value={values}>
      <Banner />
      <Header />
      <div className="App">
        <main className="search-content">
          <form>
            <label htmlFor="movie" className="titles">
              Movie Title <MdLocalMovies size={20} />
            </label>
            <Search val={showResult} inputConverter={inputConverter} />
          </form>
          <div>
            <h3 className="results">Results for: "{showResult}"</h3>
            <ResultsBox store={store} />
          </div>
        </main>
        <aside className="nominations">
          <div>
            <h3>
              Nominations
              <AiFillStar size={20} />
            </h3>
            <NominationBox />
            <h3>
              Upcoming Movies
              <IoIosRocket />
            </h3>
            <FutureBox />
          </div>
        </aside>
      </div>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;
