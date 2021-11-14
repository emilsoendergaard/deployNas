import React from "react";
import "../styles/windParkPage.css";

const TowerLights = [
  "Tower Obstruction Lights"
];
const listItems = TowerLights.map((names, index) => (
  <div className="AviationOL" key={index} style={{ color: "black" }}>
   
    {names}
   
  </div>
));

export default function TowerObstructionLights() {
  return listItems;
}

