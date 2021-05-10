import React, { useContext } from "react";
import "./elements.css";
//UI components
import Button from "../Button";
//Context API
import { MovieContext } from "../../App";

const NominatedItem = ({ item, key }) => {
  return (
    <li key={key}>
      {item.title} ({item.year})
      <Button title={"Remove"} item={item} />
    </li>
  );
};

const NominationBox = () => {
  const nomination = useContext(MovieContext);

  return (
    <div className="box">
      <ul>
        {nomination.nominate.length > 0 ? (
          nomination.nominate.map((item, key) => (
            <NominatedItem item={item} key={key} />
          ))
        ) : (
          <li>There isn't any nomination yet</li>
        )}
      </ul>
    </div>
  );
};

export default NominationBox;
