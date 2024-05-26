const triangleAreaCalculator = require('../../src/triangleAreaCalculator');

test('expect function returns correct values', ()=>{
    expect(triangleAreaCalculator(6,5)).toStrictEqual(15)
})