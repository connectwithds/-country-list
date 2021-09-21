import React from "react";
import "./App.css";

const Region = (props) => {
  return (
    <div className="container">
      <div className="container-region">
        <div className="region-card-heading">Select Region</div>

        {props.country.map((ele, ind) => {
          return (
            <div
              className="region-card"
              key={ind}
              onClick={() => props.setreg(ele.name)}
            >
              {ele.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Region;
