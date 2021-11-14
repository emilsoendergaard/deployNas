import { Divider, Paper, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import * as React from 'react';
import { Stack } from '@mui/material';
import { TemperatureMeter } from '../oilSensor/tempSpeedometer';
import { OilDegredationMeter } from '../oilSensor/oilDegredationSpeedometer';
import { BubbleMeter } from '../oilSensor/airMeter';
import CircleIcon from '@mui/icons-material/Circle';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';

import OilTempChart from '../oilSensor/Charts/oilTempChart';
import OilConditionChart from '../oilSensor/Charts/oilConditionChart';
import OilParticleBubbleChart from '../oilSensor/Charts/oilBubbleParticleChart';
import ParticleChart from '../oilSensor/Charts/oilBubbleParticleChartVs2';
const lessThan = ">";

const green = '#00c853';
const yello = '#ffab00';
const red = '#dd2c00';


/**
 * Status limits with Warning and Alarm values
 * Array with  "ISO4": ["Warning", "Alarm"]
 * @param {string} message
 */
const BoundaryLimts = {
    "ISO4": ["22", "24"],
    "ISO6": ["20", "22"],
    "ISO14": ["17", "19"],
    "OD": ["60", "80"],
    "Cutting": ["25", "50"],
    "Fatigue": ["100", "150"],
    "Fiber": ["10", "30"],
    "Sliding": ["10", "30"]
}


/**
* Check gives an ouitlined Check Circle in the color green from MUI
* @param {string} message
*/
const Check = <CheckCircleOutlineIcon style={{ color: green }} />
/**
* Warning gives an filled Circle in the color orange/yellow from MUI
* @param {string} message
*/
const Warning = <ErrorIcon style={{ color: yello }} />
/**
* Errorgives an ouitlined Erro Circle in the color red from MUI
* @param {string} message
*/
const Error = <ErrorOutlineIcon style={{ color: red }} />

let air = 0;
let cutting = 0;
let sliding = 0;
let fatigue = 0;
let fiber = 0;
let OD = 0;
let ISO4 = 0;
let ISO6 = 0;
let ISO14 = 0;


export default function OilSensorPage({ OilData, OilTemp, OilCondData, Particles, ISO4406, WindTurbine, Fatigue }) {

    air = Particles[Particles.length - 1].air;
    cutting = Fatigue.Cutting
    sliding = Fatigue.Sliding
    fatigue = Fatigue.Fatigue
    fiber = Fatigue.Fiber
    OD = OilCondData[OilCondData.length - 1].oilCondition;
    ISO4 = ISO4406.first;
    ISO6 = ISO4406.second;
    ISO14 = ISO4406.third;

    return (
        <Box className="wrapper" style={{ backgroundColor: "#2e3b5513" }}>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                rowSpacing={3}
                style={{ position: "relative", bottom: "-3%" }}
            >
                <Grid item xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Paper

                        sx={{ height: "280px", width: "95%" }}

                    >
                        <Grid container

                            direction="row" spacing={0}
                            sx={{ height: "100%", width: "100%" }}
                            justifyContent="flex-start"

                        >
                            <Grid item xs={12}
                                sx={{ height: "45px", width: "100%" }}
                            >
                                <Stack
                                    sx={{ height: "50px", width: "100%", marginTop:"15px" }}
                                    direction="row" alignItems="center" justifyContent="center">
                                    <h3>
                                        System Monitor
                                    </h3>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}

                            >
                                <Stack
                                    direction="column"
                                    sx={{ marginLeft: "25px", marginRight: "25px", height: "100%" }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >

                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Cleanliness level
                                        </h5>
                                        {CleanlinessDot(ISO4406)}
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Severe wear
                                        </h5>

                                        {SevereWearDot()}

                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Air content
                                        </h5>

                                        {AirContentDot(Particles.air)}
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Oil degradation
                                        </h5>
                                        {Dot(OD, BoundaryLimts.OD)}
                                        {/* {OilDegredationDot(OilCondData)} */}
                                    </Stack>

                                    <Divider orientation="horizontal" flexItem />

                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Fatigue wear
                                        </h5>
                                        {Dot(fatigue, BoundaryLimts.Fatigue)}
                                        {/* {FatigueWearDot()} */}
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />


                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Abrasive wear (Cutting)
                                        </h5>
                                        {Dot(cutting, BoundaryLimts.Cutting)}
                                        {/* {CuttingWearDot()} */}
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Adhesive wear (sliding)
                                        </h5>
                                        {Dot(sliding, BoundaryLimts.Sliding)}
                                        {/* {SlidingWearDot()} */}
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />

                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}

                                    >
                                        <h5 style={{ padding: "0px", margin: "2px" }}>
                                            Fibre contamination (fibres)
                                        </h5>
                                        {Dot(fiber, BoundaryLimts.Fiber)}
                                        {/* {FibreWearDot()} */}
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />

                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2.5}
                                        style={{ marginTop: "7px" }}>

                                        <Stack
                                            direction="row"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                            spacing={1}>

                                            {Check}

                                            <h5
                                            >
                                                Ok
                                            </h5>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                            spacing={1}>

                                            {Warning}
                                            <h5>
                                                Warning
                                            </h5>
                                        </Stack>

                                        <Stack
                                            direction="row"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                            spacing={1}>

                                            {Error}
                                            <h5>
                                                Alarm
                                            </h5>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={4}
                    style={{ display: "flex", justifyContent: "center" }}

                >
                    <Paper
                        sx={{ height: "280px", width: "95%", alignSelf: "center" }}
                    >
                        <Grid container
                            direction="row" spacing={0}
                            sx={{ height: "100%", width: "100%" }}
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Grid item xs={12}
                                sx={{ height: "50px", width: "100%" }}
                            >
                                <Stack
                                    sx={{ height: "100%", width: "100%" }}
                                    direction="row" alignItems="center" justifyContent="space-around">
                                    <h3 >
                                        Cleanlines code
                                    </h3>
                                    <h3 >
                                        Oil degradation
                                    </h3>
                                </Stack>
                            </Grid>

                            <Grid item xs={6}
                            >
                                <Stack
                                    direction="column"
                                    sx={{ marginLeft: "10%", marginRight: "50px", height: "100%" }}
                                    style={{ position: "relative", top: "-30px" }}
                                >
                                    <h4
                                        style={{ padding: "0px", margin: "2px" }}
                                    >
                                        ISO 4406 Codes
                                    </h4>
                                    <Divider orientation="horizontal" flexItem />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                    >
                                        <h5 style={{ padding: "0px", margin: "1.5px" }} >
                                            {lessThan} 4 microns:
                                        </h5>
                                        <h5 style={{ padding: "0px", margin: "1.5px", marginRight: "35px" }} >
                                            {ISO4406.first}
                                        </h5>
                                    </Stack>

                                    <Divider orientation="horizontal" flexItem />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                    >
                                        <h5 style={{ padding: "0px", margin: "1.5px" }} >
                                            {lessThan} 6 microns:
                                        </h5>
                                        <h5 style={{ padding: "0px", margin: "1.5px", marginRight: "35px" }} >
                                            {ISO4406.second}
                                        </h5>
                                    </Stack>
                                    <Divider orientation="horizontal" flexItem />

                                    <Stack
                                        direction="row"

                                        justifyContent="space-between"
                                    >
                                        <h5 style={{ margin: "1.5px" }} >
                                            {lessThan} 14 microns:
                                        </h5>
                                        <h5 style={{ margin: "1.5px", marginRight: "35px" }} >
                                            {ISO4406.third}
                                        </h5>
                                    </Stack>


                                    <Divider orientation="horizontal" flexItem />
                                </Stack>


                            </Grid>
                            <Grid item xs={6} >
                                <Stack alignItems="center">
                                    <OilDegredationMeter OilCondData={OilCondData} />
                                </Stack>
                            </Grid>



                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                >

                    <Paper
                        sx={{ height: "280px", width: "95%" }}
                    >
                        <Grid container
                            direction="column" 
                            spacing={0}
                            sx={{ height: "100%", width: "100%" }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={2}                  
                                >
                                <h3>
                                    Temperature
                                </h3>
                            </Grid>
                            <Grid item xs={2}>
                                <TemperatureMeter OilTemp={OilTemp} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Paper

                        sx={{ height: "100%", width: "95%" }}
                    >
                        <Stack
                            alignItems="center">
                            <h3>
                                Distinction of Particles and Bubbles
                            </h3>
                        </Stack>
                        <ParticleChart Particles={Particles} /></Paper>
                </Grid>
                <Grid item xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Paper
                        sx={{ height: "100%", width: "95%" }}
                    ><Stack
                        alignItems="center">
                            <h3>
                                Oil degradation
                            </h3>
                        </Stack>
                        <OilConditionChart OilCondData={OilCondData} /></Paper>
                </Grid>
                <Grid item xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Paper
                        sx={{ height: "100%", width: "95%" }}
                    > <Stack
                        alignItems="center">
                            <h3>
                                Temperature
                            </h3>
                        </Stack>
                        <OilTempChart OilData={OilTemp} /></Paper>
                </Grid>

                {/* </Grid> */}
            </Grid>

        </Box>

    )
}

const Dot = (type, limit) => {
    if (type >= limit[0]) {

        if (type >= limit[1]) {
            return Error;
        }
        else {
            return Warning;
        }
    }
    return Check;
}




const CuttingWearDot = () => {
    var colorType = Check;
    var value = cutting;
    if (value >= 25) {
        if (value >= 50) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )

}
const SlidingWearDot = () => {
    var colorType = Check;
    var value = sliding;
    if (value >= 10) {
        if (value >= 30) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )
}
const FibreWearDot = () => {
    var colorType = Check;
    var value = fiber;
    if (value >= 10) {
        if (value >= 30) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )
}
const CleanlinessDot = (value) => {

    var colorType = Check;

    if (value.first >= 22 || value.second >= 20 || value.third >= 19) {
        if (value >= 24 || value.second >= 22 || value.third >= 17) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (

        colorType

    )
}

const SevereWearDot = () => {
    var colorType = Check;
    var value = 6;
    if (value >= 5) {
        if (value >= 10) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )
}
const AirContentDot = () => {
    var colorType = Check;

    if (air >= 5) {
        if (air >= 10) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )
}
const OilDegredationDot = (value) => {
    var colorType = Check;

    if (value >= 60) {
        if (value >= 80) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )
}

const FatigueWearDot = () => {
    //var colorType = Check;
    var colorType = Check;
    var value = 6;
    if (value >= 5) {
        if (value >= 10) {
            colorType = Error;
        }
        else {
            colorType = Warning;
        }
    }

    return (
        colorType
    )
}




const ISO440CodeStack = (ISO4406) => {
    return (


        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={-0.001}
            sx={{ marginLeft: "10%", marginRight: "50px", height: "100%" }}
            style={{ position: "relative", top: "-30px" }}
        >
            <Divider orientation="horizontaly" />
            <h4>
                ISO 4406 Code:
            </h4>
            <Divider orientation="horizontaly" flexItem />
            <h4>
                {lessThan} 4 microns: {ISO4406.first}
            </h4>
            <Divider orientation="horizontaly" flexItem />
            <h4 >
                {lessThan} 6 microns: {ISO4406.second}
            </h4>
            <Divider orientation="horizontaly" flexItem />

            <h4>
                {lessThan}14 microns: {ISO4406.third}
            </h4>
            <h4>

            </h4>

            <Divider orientation="horizontaly" flexItem />

        </Stack>
    )
}