/** 
 * This function should return the area of a circle with the given radius
 * */ 
function circleAreaCalculator(radius){
    // Define pi for circle calculations
    const PI = 3.1;
    // I wanted to update the value of PI to be more precise, but now my function won't run!
    PI = 3.14159265;
    return PI * radius * radius;
}

if(typeof module === 'object'){
    module.exports = circleAreaCalculator;
}
