#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    { message: "Enter Your FirstNumber", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    { message: "select one operator to operation", type: "list", name: "operator", choices: ["addition", "multiplication", "subtraction", "division"] }
]);

console.log(answer);

if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("plz select valid operator");
}