/**
 * This function should return the perimeter of a triangle given three side lengths
 */
function trianglePerimeterCalculator(sideOneLength, sideTwoLength, sideThreeLength){
    const perimeter = sideOneLength + sideTwoLength + sideThreeLength;
    return perimeter;
}

if(typeof module === 'object'){
    module.exports = trianglePerimeterCalculator;
}