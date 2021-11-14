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
} from "recharts";

const DateNow = () =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;

}
export default function OilConditionChart( {OilCondData}) {
   
    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={OilCondData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 10,
                        bottom: 20,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#81d4fa" stopOpacity={1} />
                            <stop offset="60%" stopColor="#81d4fa" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="15%" stopColor="#ffea00" stopOpacity={1} />
                            <stop offset="60%" stopColor="#ffea00" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorUv3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f44336" stopOpacity={1} />
                            <stop offset="100%" stopColor="#f44336" stopOpacity={1} />
                        </linearGradient>

                        <filter id="shadow" height="200%">
                            <feDropShadow dx="0" dy="10" stdDeviation="10" />
                        </filter>

                    </defs>

                    <XAxis  dataKey={DateNow} minTickGap={60} axisLine={true} hide={false} >
                        <Label
                            value='Time'
                            position='bottom'
                            fontSize={12}
                            fill='#0E2F44'
                        />
                    </XAxis>
                    <YAxis type="number" domain={[0, 100]} >
                        <Label
                            value="OD %"
                            angle={-90}
                            position="insideLeft"
                            fill='0E2F44'
                            frontSize="12"

                        />
                    </YAxis>
                    <Tooltip />
                    <line
                        //dataKey="oilCondition"
                        //stroke={true} NOT A BOOLEAN
                        fillOpacity={2}
                        fill="#ffeb3b"
                        filter="url(#shadow)"
                    />
                    <Area
                        stroke="81d4fa"


                        type="natural"
                        dataKey="oilCondition"
                        strokeLinecap="round"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

