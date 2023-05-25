import React from "react";
import { useState } from "react";
import "./Xyz.css";
import Svg from "../src/Svg.png";
import { useEffect } from "react";

const Wheather = () => {
  const [City, setCity] = useState(null);
  const [search, setsearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f8aa3923176337be8d55f5483a34956b`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="input">
        <input
          type="search"
          className="search-box"
          value={search}
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
      </div>

    { ! City ? (
        <p className="errormsg">DATA NOT FOUND</p>
    )   : (
        <div>
          <div className="info">
            <h2 className="location">
              <img src={Svg} alt="PNG" className="img" />
              {search}
            </h2>
            <h1 className="temp">{City.temp}°C</h1>
            <h3 className="tempmin-max">Min : {City.temp_min}°C | Max :{City.temp_max}°C</h3>
          </div>
        </div>
        )}
    </>
  );
};

export default Wheather;
