import React, { useState, useEffect } from "react";
import "./elements.css";

const FutureBox = ({ val }) => {
  const randomizer = ["A", "C", "D", "S", "K", "Y", "E", "G", "O", "T", "W"];
  const [movies, setMovies] = useState([]);

  const getRequest = () => {
    fetch(
      `https://www.omdbapi.com/?t=${
        randomizer[Math.round(Math.random() * 10)]
      }&type=movie&y=2021&apikey=eeaaab8b`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies((i) => [...i, { title: data.Title, year: data.Year }]);
      });
  };

  useEffect(() => {
    for (let x = 0; x < 3; x++) {
      getRequest();
    }
  }, []);

  return (
    <div className="box">
      <ul>
        {movies.length > 0 ? (
          movies.map((item, id) => (
            <li key={id}>
              {item.title} ({item.year})
            </li>
          ))
        ) : (
          <li className="lds-dual-ring loader"></li>
        )}
      </ul>
    </div>
  );
};

export default FutureBox;
