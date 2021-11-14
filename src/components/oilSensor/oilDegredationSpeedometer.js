import ReactSpeedometer from "react-d3-speedometer"

let minValue = 0;
let maxValue = 140;
const green = '#00c853';
const yello = '#ffab00';
const red = '#dd2c00';
let currentCond=0;
export function OilDegredationMeter({OilCondData}) {

    currentCond= OilCondData[OilCondData.length-1].oilCondition;

    return (

        Oil2(currentCond)
    )

}
const Oil2 = (value) => (

    <div>
        <ReactSpeedometer
            width={201}
            height={150}
            ringWidth={20}
            needleHeightRatio={0.5}
            forceRender={false}
            maxSegmentLabels={1}
            customSegmentStops={[0,20,40,60,80,100,120,140]}
            segmentColors={[green,green,green, yello,red,red]}
            needleColor={'0E2F44'}
            currentValueText={'${value} OD %'}
            minValue={minValue}
            maxValue={maxValue}
            value={value}
            textColor={"0E2F44"}
        />
    </div>

)

