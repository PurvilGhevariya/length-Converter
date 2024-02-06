function convert(){

    let inputValue = document.getElementById("inputValue").value;

    let fromUnit = document.getElementById("fromUnit").value;

    let toUnit = document.getElementById("toUnit").value;
let result;

if(fromUnit === "cm"  && toUnit === "inch"){
    result = inputValue * 0.39370;
}else if(fromUnit === "inch" && tounit === "cm"){
    result = inputValue / 0.39370;
}else if(fromUnit === "cm" && toUnit === "feet"){   
    result = inputValue * 0.032808;
}else if(fromUnit === "feet" && toUnit === "cm"){
    result = inputValue / 0.032808 ;
}else if(fromUnit === "cm" && toUnit === "meter"){
    result = inputValue / 100;
}else if(fromUnit === "meter" && toUnit === "cm"){
    result = inputValue / 0.01;
}else if(fromUnit === "inch " && toUnit === "feet"){
    result = inputValue * 0.083333;
}else if(fromUnit === "feet" && toUnit === "inch"){
    result = inputValue * 12;
}else if(fromUnit==="inch" && toUnit==="meter"){
    result = inputValue / 39.370;
}else if(fromUnit==="meter" && toUnit==="inch"){
    result = inputValue * 39.370;
}else if(fromUnit==="feet" && toUnit==="meter"){
    result = inputValue / 3.2808;
}else if(fromUnit==="meter" && toUnit==="feet"){
    result = inputValue * 3.2808;
}else if(fromUnit==="cm" && toUnit==="yard"){
    result = inputValue * 0.010936;
}else if(fromUnit==="yard" && toUnit==="cm"){
    result = inputValue / 0.010936;
}else if(fromUnit==="cm" && toUnit==="mile"){
    result = inputValue * 0.0000062137;
}else if(fromUnit==="mile" && toUnit==="cm"){
    result = inputValue /   0.0000062137;
}else if(fromUnit==="cm" && toUnit==="kilometer"){
    result = inputValue / 100000;
}else if(fromUnit==="kilometer" && toUnit==="cm"){
    result = inputValue * 100000;
}else if(fromUnit==="inch" && toUnit==="yard"){
    result = inputValue * 0.027778;
}else if(fromUnit==="yard" && toUnit==="inch"){
    result = inputValue * 36;
}else if(fromUnit==="inch" && toUnit==="mile"){
    result = inputValue * 0.000015783;
}else if(fromUnit==="mile" && toUnit==="inch"){
    result = inputValue * 63360;
}else if(fromUnit==="inch" && toUnit==="kilometer"){
    result = inputValue / 39370;
}else if(fromUnit==="kilometer" && toUnit==="inch"){
    result = inputValue * 39370;
}else if(fromUnit==="feet" && toUnit==="yard"){
    result = inputValue * 0.33333;
}else if(fromUnit==="yard" && toUnit==="feet"){
    result = inputValue * 3;
}else if(fromUnit==="feet" && toUnit==="mile"){
    result = inputValue * 0.00018939;
}else if(fromUnit==="mile" && toUnit==="feet"){
    result = inputValue * 5280;
}else if(fromUnit==="feet" && toUnit==="kilometer"){
    result = inputValue / 3280.8;
}else if(fromUnit==="kilometer" && toUnit==="feet"){
    result = inputValue * 3280.8;
}else if(fromUnit==="meter" && toUnit==="yard"){
    result = inputValue * 1.0936;
}else if(fromUnit==="yard" && toUnit==="meter"){
    result = inputValue / 1.0936;
}else if(fromUnit==="meter" && toUnit==="mile"){
    result = inputValue * 0.00062137;
}else if(fromUnit==="mile" && toUnit==="meter"){
    result = inputValue / 0.00062137;
}else if(fromUnit==="meter" && toUnit==="kilometer"){
    result = inputValue / 1000;
}else if(fromUnit==="kilometer" && toUnit==="meter"){
    result = inputValue * 1000;
}else if(fromUnit==="yard" && toUnit==="mile"){
    result = inputValue * 0.00056818;
}else if(fromUnit==="mile" && toUnit==="yard"){
    result = inputValue * 1760;
}else if(fromUnit==="yard" && toUnit==="kilometer"){
    result = inputValue / 1093.61;
}else if(fromUnit==="kilometer" && toUnit==="yard"){
    result = inputValue * 1093.61;
}else if(fromUnit==="mile" && toUnit==="kilometer"){
    result = inputValue / 0.62137;
}else if(fromUnit==="kilometer" && toUnit==="mile"){
    result = inputValue * 39370;
}else{
    result = inputValue;
}

document.getElementById("result").innerHTML = result.toFixed(4);    
}