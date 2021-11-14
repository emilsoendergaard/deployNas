import MiniTurbineImage from "../images/miniturbine.svg"
import { NavLink } from "react-router-dom";
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { Tooltip } from "@mui/material";

let handleClick;

export default function TurbineMap({ SetWindTurbineStage }) {

  handleClick = (target) => {
    var value = target.currentTarget.id;
    value = "WT "+value;
    SetWindTurbineStage(value)
  }

  //SetWindTurbineStage("") // Set the bar to default when you go back with browser Arrows.

  return (
        <Paper
        elevation={10}
        style={{
          backgroundColor: '#2E3B55',

        }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            spacing={-10}>
            <div>{turbineFigure(1, 1, 1)}</div>
            <div>{turbineFigure(1, 1, 2)}</div>
            <div>{turbineFigure(1, 1, 3)}</div>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            spacing={-10}>
            <div>{turbineFigure(1, 1, 4)}</div>
            <div>{turbineFigure(1, 1, 5)}</div>
            <div>{turbineFigure(1, 1, 6)}</div>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            spacing={-10}>
            <div>{turbineFigure(1, 1, 7)}</div>
          </Stack>
        </Paper>

  );

}

function turbineFigure(x_pos, y_pos, number) {

  return (

    <Tooltip describeChild title={"Wind turbine #"+number+""}>
      <figure

        id={"#" + number}
        onClick={target => { handleClick(target) }}
        style={{ display: 'inline-block' }}>

        <NavLink
          to="/windTurbine"
          color="White"
          underline="White"
          style={{ textDecoration: "none" }}
        >
          <img src={MiniTurbineImage} alt="logo"
            style={{ minWidth: "20%", maxWidth: "80%" }}
          />
        <figcaption >
          <Button  style={{color:"white"}}>WT #{number}</Button>
        </figcaption>
        </NavLink>
      </figure>
    </Tooltip>
  )
}
