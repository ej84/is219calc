module.exports = class Calculation{
    constructor(a, b, operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    GetResults(){
        return this.operation(this.a, this.b);
    }
}