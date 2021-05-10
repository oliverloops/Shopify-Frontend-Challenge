import React, { useContext } from "react";
import "./elements.css";
//Context API
import { MovieContext } from "../../App";

const Banner = () => {
  const action = useContext(MovieContext);

  return (
    <>
      {action.nominate.length === 5 ? (
        <div className="banner">
          <p>
            You've added 5 nominations!&nbsp;
            <span role="img" aria-label="star">
              ⭐️
            </span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Banner;
