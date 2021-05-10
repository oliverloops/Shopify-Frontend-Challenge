import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import "./elements.css";
import "./hovercard.css";

//UI components
//import HoverCard from "./hovercard";
import Button from "../Button";

// Handle show/hide popup events
const InfoButton = ({ setOn }) => {
  const showPlot = () => {
    setOn(true);
    console.log("showPlot");
  };

  const hidePlot = () => {
    setOn(false);
    console.log("hidePlot");
  };

  return (
    <button
      className="info-button"
      onMouseEnter={() => showPlot()}
      onMouseLeave={() => hidePlot()}
    >
      <FiInfo size={19} style={{ color: "rgba(0,0,0,0.4)" }} />
    </button>
  );
};

// Isolated list item
const ListElement = ({ item, id }) => {
  const [on, setOn] = useState(false);

  return (
    <li key={id}>
      {item.title} ({item.year}){/* Plot movie info box container */}
      {on && (
        <div className="plotbox">
          <p>{item.plot}</p>
        </div>
      )}
      <InfoButton setOn={setOn} />
      <Button title={"Nominate"} item={item} />
    </li>
  );
};

const ResultsBox = ({ store }) => {
  return (
    <div className="box">
      <ul>
        {store.length > 0 ? (
          store.map((item, id) => <ListElement item={item} id={id} />)
        ) : (
          <li>Here you'll see the results</li>
        )}
      </ul>
    </div>
  );
};

export default ResultsBox;
