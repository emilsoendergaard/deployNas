import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";


const DateNow = () =>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return today = mm + '/' + dd + '/' + yyyy;

}
export default function OilChart({ OilData }) {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          data={OilData}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#81d4fa" stopOpacity={0.7} />
              <stop offset="40%" stopColor="#81d4fa" stopOpacity={0.2} />
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
            <feDropShadow dx="0" dy="10" stdDeviation="10"/>
            </filter>

          </defs>

          <XAxis minTickGap={30} axisLine={false} dataKey={DateNow} />
          <YAxis />
          <Tooltip />
          <line
             
               fillOpacity={2}
            fill ="#0091ea"  
            filter="url(#shadow)"
            />
          <Area
            stroke="#00b0ff"
          
            
            type="monotone"
            dataKey="Oil Quality"
            strokeLinecap="round"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          {/* <Area
            type="monotone"
            dataKey="Warning Zone"
            stroke="#ffeb3b"
            fill="#ffea00"
            fillOpacity={0.05}
          />
          <Area
            type="monotone"
            dataKey="Danger Zone"
            stroke="#ff3d00"
            fill="#f44336"
            fillOpacity={0.1}
          /> */}

          <ReferenceLine
            y="2000"
            dot={true}
            stroke="#00b0ff"
            label={{ value: "Warning zone", position: "bottom" }}
            strokeWidth={0.5}
          />

          <ReferenceLine
          strokeWidth={0.5}
            y="1000"
            dot={true}
            stroke="#00b0ff"
            label={{ value: "Danger zone" , position: "bottom" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

