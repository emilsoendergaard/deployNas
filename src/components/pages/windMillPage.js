import React from "react";
import "../styles/windParkPage.css";
import WindTurbineImage from "../images/windturbine.svg";
import AviationObsuctionLight from "../turbineTable/aviationOL";
import MarineLantern from "../turbineTable/marineLantern";
import TowerObstructionLights from "../turbineTable/towerOL";
import TurbineTable from "../turbineTable/turbineTable";
import OilChart from "../oilSensor/oilQualityChart";
import { NavLink, Redirect } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@mui/material";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import OilConditionChart from "../oilSensor/Charts/oilConditionChart";

function reDirect(path) {
  debugger
  return (
    <Redirect push to={path} />
  )
}
export default function windMillPage({ WindTurbine, OilCondData }) {
  if (WindTurbine == "") {
    return reDirect("/404")
  }
  else {

    return (
      <div className="wrapper">
        <div className="imageDiv">
          <img src={WindTurbineImage} className="WindTurbineImage" alt="logo" />
          <NavLink

            to="/OilSensor"
            color="White"
            underline="White"
          >
            <Button
              variant="contained"
              size="small"
              endIcon={<PersonalVideoIcon />}
              style={{ position: "fixed", top: "34%", left: "12.5%", backgroundColor: "2E3B55" }}
            >
              Oil SenSoR
            </Button>
          </NavLink>
          <div className="TopText">
            <AviationObsuctionLight></AviationObsuctionLight>
          </div>
          <div className="MiddleText">
            <TowerObstructionLights></TowerObstructionLights>
          </div>

          <div className="BottomText">
            <MarineLantern></MarineLantern>
          </div>
        </div>

        <div style={{ color: "black" }} className="WrapperTurbineTable">


          <div className="turbineTable">
            <TurbineTable WindTurbine={WindTurbine} />
          </div>

          <div className="oilChart">
            <OilConditionChart OilCondData={OilCondData} />
          </div>
        </div>
      </div>
    );
  }
}
