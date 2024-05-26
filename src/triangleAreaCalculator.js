/** 
 * This function should return the area of a triangle with the given base and height
 * */ 
function triangleAreaCalculator(b,h){
    const a = b * h / 2;
    return a;
}

if(typeof module === 'object'){
    module.exports = triangleAreaCalculator;
}