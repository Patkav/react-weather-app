import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarhenheit(event) {
    event.preventDefault();
    setUnit("farhenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farhenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃|{" "}
          <a href="/" onclick={showFarhenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farhenheit())}</span>
        <span className="unit">
          <a href="/" onclick={showCelsius}>
            ℃
          </a>
          {""}| ℉
        </span>
      </div>
    );
  }
}
