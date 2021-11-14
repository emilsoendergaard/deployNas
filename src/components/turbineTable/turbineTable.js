import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "../styles/windParkPage.css";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Switch demo" } };
// const handleOilClick = () => DisplayOilGraph();

const WTS_AviationSystemList1 = [
  "Aviation Obstruction Light",
  "ID Lights",
  "Helihoist/SRO Light",
  "Visibility Sensor",
];

const WTS_OutSideOnTowerList1 = ["Tower Light"];
const WTS_MarineSystemList1 = [
  "Marine Lantern",
  "Fog Horn",
  "Visibility Sensor",
];

const WTC_AviationSystemList1 = [
  "ID Light Controller Override",
  "Search and rescue (SAR)",
  "Helicopter Hoist Operation",
];
const DateTimeList = [
  "12:33:05 18/06/2021",
  "14:49:10 17/06/2021",
  "12:31:05 18/06/2021",
  "09:11:55 01/04/2021",
];

const WTC_MarineSystemList1 = ["Nautical Lanterns"];
let WT_EventLog = {
  arrayOfEvents: [
    {
      log: "E#1: System was started",
      time: "09:04:00 15/06/2021",
    },
    {
      log: "E#2: Batteri service requested",
      time: "17:45:50 16/06/2021",
    },
    {
      log: "E#3: Visibility lower than 10km",
      time: "23:30:01 17/06/2021",
    },
    {
      log: "E#4: Aviation Gateway TCP connection lost",
      time: "10:23:20 17/06/2021",
    },
    {
      log: "E#5: Obstruction_Light_FAIL warning activated",
      time: "15:08:33 17/06/2021",
    },
    {
      log: "E#6: Obstruction_Light_FAIL acknowledged",
      time: "15:08:33 17/06/2021",
    },
  ],
};
// function DisplayOilGraph(){
//   return()
// }
function DispolayTurbineSpecification(listSpecification, Disable) {
  return listSpecification.map(function (specification,idx){
    return DivDisplay(specification, Disable, idx);
  });
}

function DivDisplay(specification, Disable, idx) {
  const [Label, setLabel] = React.useState("On");
  const [isChecked, setChecked] = React.useState(true);
  const handleChange = () => {
    Label === "On" ? setLabel("Off") : setLabel("On");
    Label === "On" ? setChecked(false) : setChecked(true);
  };
  return (
    <div key={idx}>
      <ListItemButton  sx={{ pl: 2, margin: -0.5 }}>
        <ListItemText
           
          primary={specification}
          primaryTypographyProps={{
            color: "black",
            fontWeight: "medium",
            variant: "body2",
            fontSize: 12,
          }}
        />
        <FormControlLabel
          value="Off"
          control={
            <Switch
              {...label}
              checked={isChecked}
              size={"small"}
              disabled={Disable}
              onChange={handleChange}
            />
          }
          label={Label}
          labelPlacement="end"
          
        ></FormControlLabel>
      </ListItemButton>
      <Divider />
    </div>
  );
}

function ListItemSpecification() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText
          primary="Wind Turbine Specification"
          primaryTypographyProps={{
            color: "black",
            fontWeight: 600,
            variant: "body1",
          }}
        ></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ width: "100%", minWidth: 500, bgcolor: "background.paper" }}
          aria-labelledby="nested-list-subheader"
        >
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ margin: 0 }}
          >
            <p className="turbineTableSubHeader2">Aviation System </p>
          </ListSubheader>
          <Divider />
          {DispolayTurbineSpecification(WTS_AviationSystemList1)}
          <ListSubheader component="div" id="nested-list-subheader">
            <p className="turbineTableSubHeader2">OutSide on Tower</p>
          </ListSubheader>
          <Divider />
          {DispolayTurbineSpecification(WTS_OutSideOnTowerList1)}
          <ListSubheader component="div" id="nested-list-subheader">
            <p className="turbineTableSubHeader2">Marine System</p>
          </ListSubheader>
          <Divider />
          {DispolayTurbineSpecification(WTS_MarineSystemList1)}
        </List>
      </Collapse>
    </div>
  );
}
function DisplayTurbineCommands(CommandItem, WTC_List) {
  const [Label, setLabel] = React.useState("On");
  const [isChecked, setChecked] = React.useState(true);
  const [Disable, setDisable] = React.useState(false);
  const handleChange = () => {
    Label === "On" ? setLabel("Off") : setLabel("On");
    Label === "On" ? setChecked(false) : setChecked(true);
    Disable === true ? setDisable(false) : setDisable(true);
  };

  return (
    <div>
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ margin: 0}}
      >
        <div>
          <p className="turbineTableSubHeader">{CommandItem}</p>
          <p className="test">
            <FormControlLabel
              value="Off"
              
              control={
                <Switch
                className="SwitchSubHeader"
                  {...label}
                  checked={isChecked}
                  size={"md"}
                  onChange={handleChange}
                />
              }
              label={Label}
              labelPlacement="end"
            ></FormControlLabel>
          </p>
        </div>
      </ListSubheader>
      <Divider />
      {DispolayTurbineSpecification(WTC_List, Disable)}
    </div>
  );
}
function ListItemCommands() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText
          primary="Wind Turbine Commands"
          primaryTypographyProps={{
            color: "black",
            fontWeight: 600,
            variant: "body1",
            
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ width: "100%", minWidth: 500, bgcolor: "background.paper" }}
          aria-labelledby="nested-list-subheader"
        >
          {DisplayTurbineCommands("Aviation System", WTC_AviationSystemList1)}
          {DisplayTurbineCommands("Marine System", WTC_MarineSystemList1)}
        </List>
      </Collapse>
    </div>
  );
}
function ListItemAlarms() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText
          primary="Wind Turbine Alarms"
          primaryTypographyProps={{
            color: "black",
            fontWeight: 600,
            variant: "body1",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ width: "100%", minWidth: 500, bgcolor: "background.paper" }}
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton sx={{ pl: 2, margin: -0.5 }}>
            <NotificationImportantIcon
              className="NotificationImportantIcon"
              sx={{ fontSize: 30 }}
            />
            <ListItemText
              primary={"AviAid_FAIL"}
              primaryTypographyProps={{
                color: "black",
                fontWeight: "medium",
                variant: "body2",
                fontSize: 12,
              }}
            />
            <p>{DateTimeList[0]}</p>
            <CheckIcon className="CheckIcon" variant="filled" color="primary" />
          </ListItemButton>
          <Divider />
          <ListItemButton sx={{ pl: 2, margin: -0.5 }}>
            <NotificationsPausedIcon
              className="NotificationsPausedIcon"
              sx={{ fontSize: 30 }}
            />
            <ListItemText
              primary={"Obstruction_Light_FAIL"}
              primaryTypographyProps={{
                color: "black",
                fontWeight: "medium",
                variant: "body2",
                fontSize: 12,
              }}
            />
            <p>{DateTimeList[1]}</p>
            <Button
              variant="contained"
              color="warning"
              size="small"
              sx={{ marginLeft: 2 }}
              className="WarningAlert"
            >
              Warning
            </Button>
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
}
function ListItemEventLog() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText
          primary="Wind Turbine Event Log"
          primaryTypographyProps={{
            color: "black",
            fontWeight: 600,
            variant: "body1",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ width: "100%", minWidth: 500, bgcolor: "background.paper" }}
          aria-labelledby="nested-list-subheader"
        >
          {displayEventLog(WT_EventLog)}
        </List>
      </Collapse>
    </div>
  );
}
function displayEventLog(EventLog) {
  let eventLog = EventLog.arrayOfEvents;
  eventLog.reverse(); //Reverse virker ikke

  return eventLog.map(function (event, idx) {
    return DivEventLog(event, idx);
  });
}
function DivEventLog(event,idx) {
  return (
    <div key={idx}>
      <ListItemButton  sx={{ pl: 2, margin: -0.5 }}>
        <ListItemText
          primary={event.log}
          primaryTypographyProps={{
            color: "black",
            fontWeight: "medium",
            variant: "body2",
            fontSize: 12,
          }}
        />
        <ListItemText
        
          primary={event.time}
          primaryTypographyProps={{
            color: "black",
            fontWeight: "medium",
            variant: "body2",
            fontSize: 12,
            textAlign: "right",
          }}
          sx={{ marginRight: 2 }}
        />
      </ListItemButton>
      <Divider />
    </div>
  );
}
function ListGraphOilQuality() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText
          primary="Wind Turbine Oil Quality"
          primaryTypographyProps={{
            color: "black",
            fontWeight: 600,
            variant: "body1",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ width: "100%", minWidth: 500, bgcolor: "background.paper" }}
          aria-labelledby="nested-list-subheader"
        >
          <Button variant="text" href="./OilPage">
            {" "}
            Oil Quality{" "}
          </Button>
        </List>
      </Collapse>
    </div>
  );
}
export default function NestedList({ WindTurbine }) {
  return (
    <div >
      <List
        sx={{ width: "100%", minWidth: 500 }}
        // style={{position:"relative", right:".1%"}}
        component="nav"
        
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader"  >
            <h2 className="turbineTableHeader">Wind Turbine {ShortenNameSlice(WindTurbine)}</h2>
          </ListSubheader>
        }
      >
        {/* SUB SECTION 1*/}
        <ListItemSpecification />

        {/* SUB SECTION 2*/}
        <ListItemCommands />

        {/* SUB SECTION 3*/}
        <ListItemAlarms />

        {/* SUB SECTION 4*/}
        <ListItemEventLog />

        {/* SUB SECTION */}
        <ListGraphOilQuality />
      </List>
    </div>
  );
}
function ShortenNameSlice(event){
  let name = event;
  return name.slice(3)
}
