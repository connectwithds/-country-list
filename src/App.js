import "./App.css";
import Region from "./Region";
import Country from "./Country";
import React, { useState, useEffect } from "react";
import CountryDetails from "./CountryDetails";

function App() {
  const [country, setCountry] = useState([]);
  const [reg, setreg] = useState("asia");
  const [countryname, setCountryName] = useState("");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/region/" + reg)
      .then((resp) => resp.json())
      .then((data) => {
        setCountry(data);
      });
  }, [reg]);

  const regions = [
    { id: 1, name: "Asia" },
    { id: 2, name: "Europe" },
    { id: 3, name: "Africa" },
    { id: 4, name: "Americas" },
    { id: 5, name: "Oceania" },
  ];

  return (
    <div className="App">
      <div className="users-container">
        <Region country={regions} setreg={setreg} />
        <Country
          country={country}
          setreg={setreg}
          reg={reg}
          setCountryName={setCountryName}
          countryname={countryname}
        />
        <CountryDetails
          country={country}
          reg={reg}
          setCountryName={setCountryName}
          countryname={countryname}
        />
      </div>
    </div>
  );
}

export default App;
