import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./styles/windParkPage.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";


function createData(notification, windTurbineGenerator, timeStamp, check) {
  return { notification, windTurbineGenerator, timeStamp, check };
}

const chechIcon = () => {
  return <CheckCircleIcon className="chechIcon"></CheckCircleIcon>;
};
function createRows(props) {
  let rows = [""];
  switch (props) {
    case "Warnings":
      rows = [
        createData(
          "AviAid_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Sonar_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Heli_Light_OFF",
          "WT#3",
          "14:49:10 18/06/2021",
          chechIcon()
        ),
        createData(
          "Nav_Aid_OFF",
          "WT#5",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
      ];
      break;

    case "Acknowledged":
      rows = [
        createData(
          "Heli_Light_OFF",
          "WT#3",
          "14:49:10 18/06/2021",
          chechIcon()
        ),
        createData(
          "Nav_Aid_OFF",
          "WT#5",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Sonar_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "AviAid_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
      ];
      break;
    case "Alarms":
      rows = [
        createData(
          "Nav_Aid_OFF",
          "WT#5",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Heli_Light_OFF",
          "WT#3",
          "14:49:10 18/06/2021",
          chechIcon()
        ),
        createData(
          "AviAid_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Sonar_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
      ];
      break;
    default:
      rows = [
        createData(
          "Nav_Aid_OFF",
          "WT#5",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Heli_Light_OFF",
          "WT#3",
          "14:49:10 18/06/2021",
          chechIcon()
        ),
        createData(
          "AviAid_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
        createData(
          "Sonar_SERVICE",
          "WT#1",
          "14:49:10 18/06/2021",
          <CheckCircleIcon />
        ),
      ];
  }

  return {
    rows,
  };
}

export default function Notifications({
  notifications,
  minimizeStage,
  setMinimize,
}) {
  

  const tableContainer = notifications + "Container";
  const topTable = notifications + "Table";
  const rowsArray = [...createRows(notifications).rows];
  if (minimizeStage === "FULLSCREEN") {
    return (
      <TableContainer component={Paper} >
        <Table className={topTable} size="small" aria-label="a dense table">
          <TableHead className={tableContainer}>
            <TableRow >
              <TableCell></TableCell>
              <TableCell style={{color:"white"}}>{notifications}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <IconButton onClick={setMinimize}>
                  <MinimizeIcon></MinimizeIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsArray.map((row,index) => (
              <TableRow 
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.notification}</TableCell>
                <TableCell align="left">{row.windTurbineGenerator}</TableCell>
                <TableCell align="left">{row.timeStamp}</TableCell>
                <TableCell align="left">{row.check}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  else
  return(<div></div>);

}

