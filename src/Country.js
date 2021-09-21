import React from "react";

function Country(props) {
  return (
    <div className="container">
      <div className="container-region">
        <div className="region-card-heading">Select Country</div>
        {props.country.map((el, id) => {
          return (
            <div
              className="region-card"
              style={{ backgroundColor: "rgb(175, 175, 240)" }}
              key={id}
              onClick={() => props.setCountryName(el.name)}
            >
              {el.name}
              <img src={el.flag} alt="flag"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;
