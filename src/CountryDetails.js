import React from "react";

const CountryDetails = (props) => {
  return (
    <div className="container">
      <div className="container-region">
        <div className="region-card-heading">
          {props.reg}/{props.countryname}
        </div>
        {props.country
          .filter((e) => e.name === props.countryname)
          .map((el, id) => {
            return (
              <>
                <div className="country-card-detail">
                  <img
                    src={el.flag}
                    className="flag"
                    alt="flag"
                    style={{
                      padding: "5px",
                      margin: "0px",
                      maxWidth: "100px",
                      maxHeight: "100px",
                    }}
                  ></img>

                  <div
                    style={{
                      padding: "10px",
                      margin: "0px",
                    }}
                  >
                    <div>
                      <strong>{el.name}</strong>({el.alpha3Code})
                    </div>
                    <div>
                      <h5 style={{ marginTop: "10px" }}>{el.capital}</h5>
                    </div>
                  </div>
                </div>

                <div className="country-card-detail">
                  <div className="border">
                    Demonym
                    <br />
                    <strong>{el.demonym}</strong>
                  </div>
                  <div className="border">
                    Calling Code
                    <br />
                    <strong>+{el.callingCodes}</strong>
                  </div>
                </div>

                <div className="country-card-detail">
                  <div className="border">
                    Currency
                    <br />
                    <strong>
                      {el.currencies[0].symbol}-{el.currencies[0].name}
                    </strong>
                  </div>
                  <div className="border">
                    population
                    <br />
                    <strong>{el.population}</strong>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CountryDetails;
