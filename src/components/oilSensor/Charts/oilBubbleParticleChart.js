import React from "react";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    Label,
    LineChart,
    CartesianGrid,
    Legend,
    Line,
} from "recharts";

const DateNow = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;

}
export default function OilParticleBubbleChart({ Particles }) {

    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                { areaChart(Particles)}
                {/* {lineChart(Particles)} */}
            </ResponsiveContainer>
        </div>
    );
}

function areaChart(Particles) {
    return (

        <AreaChart
            data={Particles}
            margin={{
                top: 20,
                right: 20,
                left: 25,
                bottom: 20,
            }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#81d4fa" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#81d4fa" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#ffb300" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#ffb300" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorUv3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f44336" stopOpacity={1} />
                    <stop offset="100%" stopColor="#f44336" stopOpacity={1} />
                </linearGradient>

                <filter id="shadow" height="200%">
                    <feDropShadow dx="0" dy="10" stdDeviation="10" />
                </filter>

            </defs>

            <XAxis dataKey={DateNow} minTickGap={30} axisLine={false} >
                <Label
                    value='Time'
                    position='bottom'
                    fontSize="12"
                    fill='#0E2F44'
                />
            </XAxis>
            <YAxis type="number" yAxisId="left" domain={[0, 40000]}>
                <Label
                    value="Particles"
                    angle={-90}
                    position="left"
                    fill='0E2F44'
                    frontSize="12"

                />
            </YAxis>

            <YAxis type="number" orientation="right" yAxisId="right" domain={[0, 35000]}  >
                <Label
                    value="Bubbles"
                    angle={-90}
                    position="right"
                    fill='0E2F44'
                    frontSize="12"
                />

            </YAxis>
            <Tooltip />
            <line
                
                //dataKey="totalParticles"
                //stroke={true} NOT A BOOLEAN
                fillOpacity={2}
                fill="##ffeb3b"
                filter="url(#shadow)"
            />
            <Area
                yAxisId="left"
                stroke="#81d4fa"


                type="natural"
                dataKey="totalParticles"
                strokeLinecap="round"
                fillOpacity={1}
                fill="url(#colorUv)"
            />
            <line
               
                // dataKey="totalBubbles"
                //stroke={true} NOT A BOOLEAN
                fillOpacity={2}
                fill="##ffeb3b"
                filter="url(#shadow)"
            />
            <Area
                yAxisId="right"
                stroke="#ffb300"
                type="natural"
                dataKey="totalBubbles"
                strokeLinecap="round"
                fillOpacity={1}
                fill="url(#colorUv2)"
            />

        </AreaChart>
    )
}
function lineChart(Particles) {
    return (

        <LineChart
            width={500}
            height={300}
            data={Particles}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={DateNow} minTickGap={30} axisLine={false} >
                <Label
                    value='Time'
                    position='bottom'
                    fontSize="12"
                    fill='#0E2F44'
                />
            </XAxis>
            <YAxis yAxisId="left" domain={[0, 40000]}>
                <Label
                    value="Particles"
                    angle={-90}
                    position="left"
                    fill='0E2F44'
                    frontSize="12"

                />
            </YAxis>
            <YAxis yAxisId="right" orientation="right" domain={[0, 35000]}  >
                <Label
                    value="Bubbles"
                    angle={-90}
                    position="right"
                    fill='0E2F44'
                    frontSize="12"
                />

            </YAxis>
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="Bubbles" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="Particles" stroke="#82ca9d" />
        </LineChart>
    )   
}
