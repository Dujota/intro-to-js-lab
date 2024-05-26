const circleAreaCalculator = require('../../src/circleCalculator.js')

test('expect function to not throw assignment to constant variable error', ()=>{
    expect(circleAreaCalculator).not.toThrowError(TypeError)
})

test('expect function does not use 3.1 to approximate PI', () => {
    expect(circleAreaCalculator(3)).not.toBeCloseTo(27.9)
})

test('expect function to use precise value of PI', () => {
    expect(circleAreaCalculator(3)).toBeCloseTo(28.27433)
})