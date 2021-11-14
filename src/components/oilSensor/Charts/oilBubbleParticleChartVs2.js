import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    Label,
} from 'recharts';

const DateNow = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;

}

export default function ParticleChart({ Particles }) {
    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                {Chart(Particles)}
            </ResponsiveContainer>
        </div>
    );

}

function Chart(Particles) {
    return (
        <LineChart width={500} height={300} data={Particles}
            margin={{
                top: 20,
                right: 20,
                left: 25,
                bottom: 20,
            }}>

            <XAxis dataKey={DateNow} minTickGap={30} padding={{ left: 30, right: 30 }}>
                <Label
                    value='Time'
                    position='bottom'
                    fontSize="12"
                    
                />
            </XAxis>
            <YAxis  yAxisId="left"  domain={[0,40000]}>
                <Label
                    value="Particles"
                    angle={-90}
                    position="left"
                    style={{fill:"#8884d8"}}
                    frontSize="12"

                />
            </YAxis>

            <YAxis  orientation="right" domain={[0,35000]} >
                <Label
                    value="Bubbles"
                    angle={-90}
                    position="right"
                    
                    frontSize="12"
                    style={{fill:"#82ca9d"}}
                />

            </YAxis>
            <Tooltip />
            
            <Line type="monotone" dataKey="totalParticles" stroke="#8884d8" dot={false} />
            <Line type="monotone" dataKey="totalBubbles" stroke="#82ca9d" dot={false} />
        </LineChart>
    )
}