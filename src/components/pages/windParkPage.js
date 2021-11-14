import React from "react";
import "../styles/windParkPage.css";
import NotificaionToggleButton from "../notificationToggleButtons";
import Notifications from "../notifications";
import Map from '../turbinePark/map'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function WindParkPage({ SetWindTurbineStage }) {
  const [minimizeStage, setMinimizeStage] = React.useState("FULLSCREEN");

  const setMinimize = () => {
    setMinimizeStage("MINIMIZED");
  };

  const setFullScreen = () => {
    setMinimizeStage("FULLSCREEN");
  };

  const [notifications, setNotifications] = React.useState("Acknowledged");

  const handleNotifications = ({ target }) => {
    setNotifications(target.value);
    setFullScreen();
  };

  return (
    <Box className="wrapper">

      <Grid
        style={{ position: "relative", top: "40px" }}
        container
        justifyContent="space-around"
        columnSpacing={{ md: 8 }}
        alignItems="center"
      >
        <Grid item xs={7}>
          <Map SetWindTurbineStage={SetWindTurbineStage} />
        </Grid>

        <Grid
          item xs={4}
          container
          direction="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid>
            <Notifications

              notifications={notifications}
              minimizeStage={minimizeStage}
              setMinimize={setMinimize}
            ></Notifications>
          </Grid>
          <Grid >
            <NotificaionToggleButton
              handleNotifications={handleNotifications}
              notifications={notifications}
              setFullScreen={setFullScreen}
            />
          </Grid>


        </Grid>
      </Grid>


    </Box>
  )
}
      // <Box className="mapDiv">
      //   <Map SetWindTurbineStage={SetWindTurbineStage} />

      // </Box>
      // <Box className="WrapperTurbineTable" >
      //  <Paper >
            // <Notifications
            //   notifications={notifications}
            //   minimizeStage={minimizeStage}
            //   setMinimize={setMinimize}
            // ></Notifications>
      //     </Paper>
      // </Box>

