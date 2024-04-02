#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// Welcome message
console.log((`\n\t\t\t\t  ${chalk.gray("================================")}`));
console.log(`\t\t${chalk.gray("<==={==={==={==={")} ${chalk.bgRed("WELCOME TO NUMBER GUESSING GAME!")} ${chalk.gray("}===}===}===}===>")}`);
console.log((`\t\t\t\t  ${chalk.gray("================================")}\n`));
console.log(chalk.blueBright("-> If you want to exit enter : 0\n\n"));
let flag = true;
while (flag) {
    //generates random numbers between 1 to 6
    let randomNum = Math.floor(Math.random() * 6 + 1);
    //asking user guess the number
    let answer = await inquirer.prompt([
        {
            name: "userGuessedNum",
            type: "number",
            message: chalk.gray("Guess the number between (1 to 6) :")
        }
    ]);
    if (!(answer.userGuessedNum === 0)) {
        //matching the numbers
        if (answer.userGuessedNum === randomNum) {
            console.log(chalk.greenBright("Congratulations!,you guess the correct number.\n"));
        }
        else {
            console.log(chalk.red("You guessed the wrong number\n"));
        }
        ;
    }
    else {
        flag = false;
    }
    ;
}
;
//Ending message
console.log((`\n\t\t\t\t   ${chalk.gray("==============================")}`));
console.log(`\t\t\t\t   ${chalk.bgRed("Well played,see you next time!")}`);
console.log((`\t\t\t\t   ${chalk.gray("==============================")}\n`));
