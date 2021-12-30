function Calculator(num1,num2){
    this.add = (num1,num2) => +num1 + +num2;
    this.subtract = (num1,num2) => num1 - num2; 
    this.multiply = (num1,num2) => num1 * num2;
    this.divide = (num1,num2) => num1 / num2;
}
let calculator = new Calculator();

console.log(calculator.divide(1,4));