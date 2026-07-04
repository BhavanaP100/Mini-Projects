const userchoiceDisplay = document.getElementById("userChoice");
const computerchoiceDisplay = document.getElementById("computerChoice");

const userscore = document.getElementById("userScore");
const computerscore = document.getElementById("computerScore");

const result = document.getElementById("result");

const buttons = document.querySelectorAll(".choice");

const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

// Add click event to every button
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        playGame(button.id);
    });
});

function playGame(userChoice) {

    
    userchoiceDisplay.innerHTML = userChoice;

    let random = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[random];

    computerchoiceDisplay.innerHTML = computerChoice;

    if (userChoice === computerChoice) {

        result.innerHTML = "🤝 Draw";

    }

    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        userScore++;
        userscore.innerHTML = userScore;

        result.innerHTML = "🎉 User Won";

    }

    else {

        computerScore++;
        computerscore.innerHTML = computerScore;

        result.innerHTML = "💻 Computer Won";

    }

}