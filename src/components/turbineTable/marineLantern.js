import React from "react";
import "../styles/windParkPage.css";

const MarineLanterns = [
  "Marine Lantern",
  "Helicopter Corridor Light",
  "Fog Horn",
  "Marine Visibility",
  "Marine AIS Transponder",
  "Marine Sonar",
  "Marine TP ID Light",
  "Marine TP Boat Light",
  "Marine TP Flood Light",
];
const listItems = MarineLanterns.map((names, index) => (
  <div className="AviationOL" key={index} style={{ color: "black" }}>
    {names}
  </div>
));
export default function MarineLantern() {
  return listItems;
}
