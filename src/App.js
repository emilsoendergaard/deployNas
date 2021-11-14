import "./App.css";
import WindParkPage from "./components/pages/windParkPage";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WindMillPage from "./components/pages/windMillPage";
import React from "react";
import mqtt from "./components/MQTT/controller";
import data from "./components/oilSensor/oilData";
import Error404Page from "./components/pages/404Page";
import OilSensorPage from "./components/pages/oilSensorPage";

const oilCondDataDefault = [{
  "oilCondition": 10
}]

const tempData = [{
  "oilTemp": 0
}]
const particlesDefault = [{
  "totalParticles": 0,
  "totalBubbles": 0,
  "air": 0,
}]
const ISO4406Default={
  "first":1,
  "second":2,
  "third":3,
}
const FatigueDefault={
  "Sliding":1,
  "Cutting":2,
  "Fiber":3,
  "Fatigue":4
}

function App() {
  const [windTurbine, setWindTurbineState] = React.useState("WT #2")
  const SetWindTurbineStage = (value) => setWindTurbineState(value)
 
  const [ISO4406, setISO4406] = React.useState(ISO4406Default)
  const addISO4406 = (newElement) => setISO4406(newElement)

  const [fatigue, setFatigue] = React.useState(FatigueDefault)
  const addFatigue = (newElement) => setFatigue(newElement)

  /**
 * oilCondData contains oil degradation level OD % in the type: "oilCondition":10. 
 * @param {string} message
 */
  const [oilCondData, setOilCondData] = React.useState(oilCondDataDefault)
  const addOilCondData = (newElement) => {
    
    setOilCondData(oilCondData => [...oilCondData, newElement])
  }

  const [oilData, setOilData] = React.useState(data)
  const addOilData = (newElement) => {
    setOilData(oilData => [...oilData, newElement])
  }

  const [temp, setTemp] = React.useState(tempData)
  const addTempData = (newElement) => {
    setTemp(temp => [...temp, newElement]) 
  }

  const [particles, setParticles] = React.useState(particlesDefault)
  const addParticles = (newElement) => {
    setParticles(particles => [...particles,newElement])
  }

  mqtt(addISO4406,addOilData, addTempData,addOilCondData, addParticles, addFatigue) 

  return (

    <Router>
      <NavigationBar SetWindTurbineStage={SetWindTurbineStage} WindTurbine={windTurbine} />

      <Switch>
        <Route
          exact path="/" render={() => <WindParkPage SetWindTurbineStage={SetWindTurbineStage} />}
        />
        <Route
          path="/windTurbine"

          render={() => <WindMillPage WindTurbine={windTurbine} OilCondData={oilCondData}  />}
        />
        <Route
          path="/404"
          render={() => <Error404Page />}
        />

        <Route
          path="/OilSensor"
          render={() => <OilSensorPage ISO4406={ISO4406} Particles={particles} WindTurbine={windTurbine} OilData={oilData} OilTemp={temp} OilCondData={oilCondData} Fatigue={fatigue}/>}
        />
      </Switch>
    </Router>

  );
}

export default App;

