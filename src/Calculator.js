const Adding = require('./operator/Addition');
const Subtracting = require('./operator/Subtraction');
const Multiplying = require('./operator/Multiplication');
const Dividing = require('./operator/Division');
const Squaring = require('./operator/Square');
const Rooting = require('./operator/Sqr_root');
const Calculation = require('./model/Calculation');

// All functions are based on SOLID's S rules, executed only one by one.
class Calculator{
    calculations = [];

    Adding(a, b){
        this.PlusCalculation(new Calculation(a, b, Adding));
        return this.GetTheLastCalc();
    }

    Subtracting(a, b){
        this.PlusCalculation(new Calculation(a, b, Subtracting));
        return this.GetTheLastCalc();
    }

    Multiplying(a, b){
        this.PlusCalculation(new Calculation(a, b, Multiplying));
        return this.GetTheLastCalc();
    }

    Dividing(a, b){
        this.PlusCalculation(new Calculation(a, b, Dividing));
        return this.GetTheLastCalc();
    }

    Squaring(a){
        this.PlusCalculation(new Calculation(a, 2, Squaring));
        return this.GetTheLastCalc();
    }

    Rooting(a){
        this.PlusCalculation(new Calculation(a, 2, Rooting));
        return this.GetTheLastCalc();
    }

    ClearTheHistory(){
        this.calculations = [];
    }

    PlusCalculation(operation){
        this.calculations.push(operation);
}

    GetTheLastCalc(){
        return this.calculations[this.calculations - 1];
    }

    Copying(){
        let newCalc = new Calculator();
        newCalc.calculations = this.calculations;
    }

}
module.exports = Calculator;

