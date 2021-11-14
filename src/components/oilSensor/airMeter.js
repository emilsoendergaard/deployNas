import ReactSpeedometer from "react-d3-speedometer"
let bubble = 7;
let minValue = 0;
let maxValue = 100;
const green = '#00c853';
const yello = '#ffab00';
const red = '#dd2c00';

export function BubbleMeter({Air}) {
   
    var air= Air[Air.length-1].air;
    return (
        Air2(air)
    )
}
const Air2 = (value) => (

    <div>
        <ReactSpeedometer
            width={201}
            height={200}
            ringWidth={20}
            needleHeightRatio={0.5}
            forceRender={false}
            maxSegmentLabels={1}
            customSegmentStops={[0,25,50,75,100]}
            segmentColors={['#2e3b55b7']}
            needleColor={'0E2F44'}
            currentValueText={'${value}%'}
            minValue={minValue}
            maxValue={maxValue}
            value={value}
            textColor={"0E2F44"}
        />
    </div>

)

