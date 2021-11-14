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

const DateNow = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;

}
export default function OilTempChart({ OilData }) {

    
    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={OilData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="15%" stopColor="#81d4fa" stopOpacity={0.7} />
                           
                        </linearGradient>
                      

                       

                    </defs>

                    <XAxis dataKey={DateNow} minTickGap={30} axisLine={true}  >
                        <Label
                            value='Time'
                            position='bottom'
                            fontSize={12}
                            fill='#0E2F44'
                        />
                    </XAxis>
                    <YAxis type="number" domain={[-20, 120]} >
                        <Label
                            value="Celcius"
                            angle={-90}
                            position="insideLeft"
                            fill='0E2F44'
                            frontSize="12"

                        />
                    </YAxis>
                    <Tooltip />
                    <line
                       // dataKey="oilTemp"
                       // stroke={true} NOT A BOOLEAN
                        fillOpacity={2}
                        fill="##ffeb3b"
                        filter="url(#shadow)"
                    />
                    <Area
                        stroke="##ffeb3b"

                        type="natural"
                        dataKey="oilTemp"
                        strokeLinecap="round"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                        baseLine={[{x:0,y:-20}]}
                    />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

