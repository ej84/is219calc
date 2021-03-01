const Adding = require('../src/operator/Addition');
const Subtracting = require('../src/operator/Subtraction');
const Multiplying = require('../src/operator/Multiplication');
const Dividing = require('../src/operator/Division');
const Squaring = require('../src/operator/Square');
const Rooting = require('../src/operator/Sqr_root');
const Calculation = require("../src/model/Calculation");
const Calculator = require('../src/Calculator');
let calculator = new Calculator();

test('Addition', () => {
    let calculation = calculator.Adding(5,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Adding);
    expect(calculation.GetResults()).toBe(7);
});
test('Subtraction', () => {
    let calculation = calculator.Subtracting(1,3);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Subtracting);
    expect(calculation.GetResults()).toBe(-2);
});
test('Multiplication', () => {
    let calculation = calculator.Multiplying(4,5);
    expect(calculation.a).toBe(2);
    expect(calculation.b).toBe(3);
    expect(calculation.operation).toBe(Multiplying);
    expect(calculation.GetResults()).toBe(20);
});
test('Division', () => {
    let calculation = calculator.Dividing(2,10);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Dividing);
    expect(calculation.GetResults()).toBe(5);
});
test('Square', () => {
    let calculation = calculator.Squaring(5);
    expect(calculation.a).toBe(5);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Squaring);
    expect(calculation.GetResults()).toBe(25);
});
test('Square Rooting', () => {
    let calculation = calculator.Rooting(4);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Rooting);
    expect(calculation.GetResults()).toBe(2);
});
test('Calculator ClearHistory', () => {
    calculator.Adding(5,2);
    calculator.ClearTheHistory();
    expect(calculator.calculations.length).toBe(0);
});
test('Calculator adding to Calculations after doing operation', () => {
    calculator.ClearTheHistory()
    calculator.Rooting(4);
    calculator.Squaring(5);
    calculator.Adding(4,2);
    expect(calculator.calculations.length).toBe(3);
    calculator.calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(calculator.calculations[0].operation = Rooting);
    expect(calculator.calculations[1].operation = Squaring);
    expect(calculator.calculations[2].operation = Adding);
});

test('Calculator adding to Calculations with PlusCalculation Method', () => {
    calculator.ClearTheHistory()
    calculator.PlusCalculation(new Calculation(5,2,Adding));
    calculator.PlusCalculation(new Calculation(4,2,Rooting));
    calculator.PlusCalculation(new Calculation(4,5,Multiplying));
    expect(calculator.calculations.length).toBe(3);
    calculator.calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(calculation);
    })
    expect(calculator.calculations[0].operation = Adding);
    expect(calculator.calculations[1].operation = Rooting);
    expect(calculator.calculations[2].operation = Multiplying);
});

test('Calculator gets the last Calculation', () => {
    calculator.ClearTheHistory()
    calculator.Rooting(4);
    calculator.Squaring(5);
    calculator.Adding(5,2);
    expect(calculator.GetTheLastCalc().operation).toBe(Adding);
});

test('Calculator copy method executing', () => {
    calculator.ClearTheHistory()
    calculator.Rooting(4);
    calculator.Squaring(5);
    calculator.Adding(5,2);
    let newCalc = calculator.Copying();
    expect(newCalc.calculations).toBe(calculator.calculations);
});