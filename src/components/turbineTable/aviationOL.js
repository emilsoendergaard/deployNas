import React from "react";
import "../styles/windParkPage.css";

const AviationLights = [
  "Aviation Obstruction Light",
  "Helihoist Light",
  "Aviation ID Light",
  "Aviation Visibility Sensor",
];
const listItems = AviationLights.map((names, index) => (
  <div className="AviationOL" key={index} style={{ color: "black" }}>
   
    {names}
   
  </div>
));

export default function AviationObsuctionLight() {
  return listItems;
}
