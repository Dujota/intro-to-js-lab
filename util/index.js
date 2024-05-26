/**
 * You can ignore everything in this file.  
 * 
 * It contains all the functions needed to make the application work
 * You do not need to modify anything in this file to resolve the bugs.
 */

function handleTriangleCalculatorSubmit(event){
    event.preventDefault()
    let result = ""
    let length = 0;
    let height = 0;

    const lengthInput = document.getElementById("lengthInput")
    if (!lengthInput){
        result = "The length input is invalid"
    } else{
        length = parseFloat(lengthInput.value)
    }
    const heightInput = document.getElementById("heightInput")
    if (!heightInput){
        result = "The height input is invalid"
    } else{
        height = parseFloat(heightInput.value)
    }
    result = ` The area of your triangle is ${triangleAreaCalculator(length, height)}`
    document.getElementById("triangleAreaResult").innerHTML = result
}

function handleCircleCalculatorSubmit(event){
    event.preventDefault()
    let result = ""
    let radius = 0;
    const radiusInput = document.getElementById("radiusInput")
    if (!radiusInput){
        result = "The radius input is invalid"
    } else{
        radius = parseFloat(radiusInput.value)
        result = `The area of your circle is ${circleAreaCalculator(radius)}`
    }
    document.getElementById("circleAreaResult").innerHTML = result
}

function handleTrianglePerimeterCalculatorSubmit(event){
    event.preventDefault()
    let result = ""
    const sideOneInput = document.getElementById("trianglePerimeterSideOneInput")
    const sideTwoInput = document.getElementById("trianglePerimeterSideTwoInput")
    const sideThreeInput = document.getElementById("trianglePerimeterSideThreeInput")

    if (!sideOneInput || !sideTwoInput || !sideThreeInput){
        result = "Your side inputs are invalid"
    } else{
        const sideOneLength = sideOneInput.value
        const sideTwoLength = sideTwoInput.value
        const sideThreeLength = sideThreeInput.value
        const perimeter = trianglePerimeterCalculator(sideOneLength, sideTwoLength, sideThreeLength)
        result = `The perimeter of your triangle is ${perimeter}`
    }
    document.getElementById("trianglePerimeterResult").innerHTML = result
}