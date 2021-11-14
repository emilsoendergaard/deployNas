import MiniTurbineImage from "../images/miniturbine.svg"

export default function TurbineImg({turbine}) {
    return (
    <img src={MiniTurbineImage} className="MiniTurbineImage" alt="logo" /> 
    )
}

// function turbineColums(columes){
//    debugger
//     let img = <img src={MiniTurbineImage} className="MiniTurbineImage" alt="logo" />;
//     let input = [""];
    
//     for (let index = 0; index < columes; index++) {
//         input.push(img);
//     }

//     let output="<div>" + input + "</div>";
//     return (
//         <div>
//             for (let index = 0; index < array.length; index++) {
//                 const element = array[index];
                
//             }
//         </div>
//   )

// }