const Adding = require('../src/operator/Addition');
const Subtracting = require('../src/operator/Subtraction');
const Multiplying = require('../src/operator/Multiplication');
const Dividing = require('../src/operator/Division');
const Squaring = require('../src/operator/Square');
const Rooting = require('../src/operator/Sqr_root');
const Calculation = require("../src/model/Calculation");

test('Testing Addition', () => {
    let calculation = new Calculation(1,2,Adding);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Adding);
});
test('Results of Adding', () => {
    let calculation = new Calculation(1, 2, Adding)
    expect(calculation.GetResults()).toBe(3);
});
test('Results of Subtracting', () => {
    let calculation = new Calculation(1, 2 ,Subtracting)
    expect(calculation.GetResults()).toBe(-1);
});
test('Results of Multiplying', () => {
    let calculation = new Calculation(2, 3,Multiplying)
    expect(calculation.GetResults()).toBe(6);
})
test('Results of Dividing', () => {
    let calculation = new Calculation(4, 2, Dividing)
    expect(calculation.GetResults()).toBe(2);
});
test('Results of Squaring', () => {
    let calculation = new Calculation(2, 3,Squaring)
    expect(calculation.GetResults()).toBe(8);
});
test('Results of Rooting', () => {
    let calculation = new Calculation(125, 3,Rooting)
    expect(calculation.GetResults()).toBeCloseTo(5);
});