import { React, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  // const fetchData = async () => {
  //   const response = await fetch("https://restcountries.com/v2/all");
  //   const newData = await response.json();
  //   // console.log(newData);
  //   setCountries(newData);
  // };

  const num = [2, 4, 5, 9];
  // console.log(num.indexOf(2));

  const countryToShow = countries.filter((country) => {
    return (
      country.name.toUpperCase().indexOf(searchedCountry.toUpperCase()) > -1
    );
  });

  console.log(countryToShow);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      // console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearchedCountry(e.target.value);
  };

  // console.log(countries);
  // console.log(searchedCountry);
  // const obj = {
  //   nameOne: "Elisabet",
  //   nameTwo: "Martha",
  // };

  // console.log(obj.nameOne);

  // const firstTenCountries = countries.slice(0, 10);
  // console.log(firstTenCountries);

  return (
    <div className="App">
      <h2>Welcome from countries</h2>
      <label>Search for a country by name </label>
      <input type="text" onChange={handleSearch} />
      {countryToShow.length >= 250 ? (
        <p>Please enter a country to know about...</p>
      ) : countryToShow.length >= 20 ? (
        <p>Too many matches, specify another filter</p>
      ) : countryToShow.length === 1 ? (
        countryToShow.map((country) => {
          const { flag, name, population, region } = country;
          return (
            <div key={name}>
              <img src={flag} style={{ width: "100px" }} alt="countries" />
              <p>Name: {name} </p>
              <p>Population: {population}</p>
              <p>Region: {region} </p>
            </div>
          );
        })
      ) : (
        <div>
          {countryToShow.map((countrySearch) => {
            return <div>{countrySearch.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
