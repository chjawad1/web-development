const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question, correctAnswer) {
    rl.question(question + '\n', (userAnswer) => {
        if (userAnswer === correctAnswer) {
            console.log("Success! Your answer is correct.");
        } else {
            console.log("Error! The correct answer is: " + correctAnswer);
        }
        rl.close();
    });
}

askQuestion("What is the capital of France?", "paris");
