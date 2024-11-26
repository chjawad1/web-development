const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMessage() {
    rl.question("Enter a number (how many times to display the message): ", (timesInput) => {
        let times = parseInt(timesInput);

        if (!isNaN(times) && times > 0) {
            rl.question("Enter the message you want to display: ", (message) => {
                for (let i = 0; i < times; i++) {
                    console.log(message);  // Display the message in the terminal
                }
                rl.close();
            });
        } else {
            console.log("Please enter a valid number greater than 0.");
            rl.close();
        }
    });
}

// Call the function
displayMessage();
