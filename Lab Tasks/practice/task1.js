const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let sum = 0;
function askForNumber(){
    rl.question("Enter a number (or 0 to end):", (input )=> {let number = parseFloat(inout);
    if (isNaN(number)){
        console.log("Invalid input. Please enter a number.");
        askForNumber();
    }
    else if (number === 0 ){
        console.log("Sum of numbers is: ", sum);
        rl.close();
    }else {
        sum +=number;
        askForNumber();
    }
    });
}
askForNumber();