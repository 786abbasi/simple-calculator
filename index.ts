#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Please Enter a First Number", type: "number", name: "firstNumber" },
  { message: "Please Enter a Second Number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional Statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select a valid operator");
}
/********The End***********/
