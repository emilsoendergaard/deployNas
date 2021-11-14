import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import disLogo from "./images/wind_logo_white.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import "./styles/windParkPage.css";
import { NavLink, withRouter } from "react-router-dom";


function NavigationBar({ SetWindTurbineStage, WindTurbine }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [windTurbine, setWindTurbine] = React.useState("");




  const clearSelected = () => {
    SetWindTurbineStage("");
    setWindTurbine("");
  }



  const handleChangeWindTurbine = (event) => {

    SetWindTurbineStage(event.target.value);
    // setWindTurbine(event.target.value);
    // handleSlice(event)
    // SetWindTurbineStage(event.target.value);
    // let name = event.target.value;
    // name.slice(2,4)

  };
  const handleSlice = (event) => {
    let name = event.target.value;
    const sliceName = name.slice(3)
    SetWindTurbineStage(sliceName);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const styleGrey = {
    background: "#2E3B55",
  };

  const turbineNames = [
    "WT #1",
    "WT #2",
    "WT #3",
    "WT #4",
    "WT #5",
    "WT #6",
    "WT #7",
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 1 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  if (!WindTurbine == "" && !WindTurbine == windTurbine) {
    // Select.SelectID.value={WindTurbine}
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }} position="fixed" top="0" width="100%" z-index="100" >
      <AppBar style={styleGrey} position="relative">
        <Toolbar >
          <img src={disLogo} alt="windLogo" className="disLogo" />
          
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 130 }}

          >
            <InputLabel
              id="demo-simple-select-standard-label"
              className="navigationItem"
              style={{ color: "white" }}
            >
              Choose WT
            </InputLabel>

            <Select
              className="navigationBarSelect"
              labelId="SelectLabel"
              id="SelectID"
              style={{ color: "white", border: "white" }}
              value={WindTurbine}
              onChange={e => { handleChangeWindTurbine(e) }}
              autoWidth
              label="WT"

            >
              {turbineNames.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  className="navigationMenuItem"
                  component={NavLink}
                  to={"/windTurbine"}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <NavLink

            to="/"
            color="White"
            underline="White"
            style={{ textDecoration: "none", position: "fixed", left: "45%" }}
          >
            <Typography

              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              style={{
                left: "50%"
              }}
              color="white"
              onClick={clearSelected}

            >
              Navigation Aid System
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              className="iconMibleLarge"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}


export default withRouter(NavigationBar);
