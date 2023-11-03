import inquirer from "inquirer";
import chalk from "chalk";

let genNum =Math.floor (Math.random() *2)

let user = await inquirer.prompt({
    name : "num1",
    type:"list",
    message:"please enter the number: ",
    choices: ["0","1"]
})

// console.log(parseInt(user.num1))

if (genNum === parseInt(user.num1)){
    console.log(chalk.bold.blueBright("congratulation you won"))
}else {
    console.log(chalk.bold.redBright("please, better luck next time"))
}