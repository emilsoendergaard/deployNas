import ReactSpeedometer from "react-d3-speedometer"
let temp = 0;
let minValue = -100;
let maxValue = 250;
let currentTemp;
export function TemperatureMeter({OilTemp}) {

   
    currentTemp= OilTemp[OilTemp.length-1].oilTemp;
    return (

        temp2(currentTemp)
    )

}
const temp2 = (temp) => (
    <div>
        <ReactSpeedometer
            width={250}
            height={190}
            ringWidth={20}
            needleHeightRatio={0.5}
            forceRender={false}
            maxSegmentLabels={1}
            customSegmentStops={[-20,0,20,40,60,80,100,120]}
            segmentColors={['#ffab00', '#00c853','#00c853','#00c853','#00c853','#ffab00','#dd2c00']}
            needleColor={'0E2F44'}
            currentValueText={'${value}\u00B0'}
            minValue={-20}
            maxValue={120}
            value={temp}
            textColor={"0E2F44"}
        />
    </div>

)

const temp1 = () => (

    <div>
        <ReactSpeedometer
            minValue={minValue}
            maxValue={maxValue}
            customSegmentStops={[-100, 0, 25, 50, 75, 100, 125, 250]}
            width={350}
            height={200}
            needleHeightRatio={0.6}
            value={temp}
            currentValueText={"27 \u00B0 "}
            customSegmentLabels={[
                {
                    text: 'Very Bad',
                    position: 'INSIDE',
                    color: '#555',
                },
                {
                    text: 'Bad',
                    position: 'INSIDE',
                    color: '#555',
                },
                {
                    text: 'Ok',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '19px',
                },
                {
                    text: 'Good',
                    position: 'INSIDE',
                    color: '#555',
                },
                {
                    text: 'Very Good',
                    position: 'INSIDE',
                    color: '#555',
                },

                {
                    text: 'Good',
                    position: 'INSIDE',
                    color: '#555',
                },
                {
                    text: 'Very Good',
                    position: 'INSIDE',
                    color: '#555',
                },
            ]}
            ringWidth={50}
            needleTransitionDuration={10000}
            needleTransition="easeElastic"
            needleColor={'#0E2F44'}
            textColor={"#0E2F44"}
        />
    </div>
)

