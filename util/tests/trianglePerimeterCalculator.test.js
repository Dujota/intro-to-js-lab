const trianglePerimeterCalculator = require('../../src/trianglePerimeterCalculator');

test('expect function returns a number, not a string', ()=>{
    expect(typeof trianglePerimeterCalculator("3","4","5")).toBe("number");
})

test('expect function returns correct perimeter value', ()=>{
    expect(trianglePerimeterCalculator("3","4","5")).toStrictEqual(12);
})