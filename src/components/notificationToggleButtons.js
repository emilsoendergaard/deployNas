import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import "./styles/windParkPage.css";

export default function NotificaionToggleButtons({
  handleNotifications,
  notifications,
}) {

  return (
    <ToggleButtonGroup
      className="toggleGroupe"
      size="small"
      value={notifications}
      exclusive
      onChange={handleNotifications}
      style={{ position: "relative", top: "12px" }}

    >
      <ToggleButton className="toggleButton" value="Acknowledged" color="info">
        Acknowledged
      </ToggleButton>
      <ToggleButton value="Warnings" color="warning">
        Warnings
      </ToggleButton>
      <ToggleButton value="Alarms" color="error">
        Alarms
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
