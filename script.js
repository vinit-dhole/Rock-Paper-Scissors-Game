
// Select choices
const choices = document.querySelectorAll(".choice");


// Select result elements
const resultMessage = document.querySelector("#result-message");

const userChoiceMessage =
    document.querySelector("#user-choice-message");

const computerChoiceMessage =
    document.querySelector("#computer-choice-message");


// Select score elements
const userScoreElement =
    document.querySelector("#user-score");

const computerScoreElement =
    document.querySelector("#computer-score");


// Select reset button
const resetButton =
    document.querySelector("#reset-button");


// Choices array
const choicesArray = ["rock", "paper", "scissor"];


// Scores
let userScore = 0;
let computerScore = 0;


// Generate computer choice
function computerChoice() {

    const randomIndex =
        Math.floor(Math.random() * 3);

    return choicesArray[randomIndex];
}


// Decide winner
function playGame(userChoice, computerChoice) {

    // Draw
    if (userChoice === computerChoice) {
        return "draw";
    }


    // User wins
    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        return "user";
    }


    // Computer wins
    return "computer";
}


// Convert choice name for display
function formatChoice(choice) {

    if (choice === "rock") {
        return "Rock";
    }

    if (choice === "paper") {
        return "Paper";
    }

    return "Scissors";
}


// When user clicks a choice
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        // Get user's choice
        const userChoice = choice.id;


        // Generate computer choice
        const computer = computerChoice();


        // Display choices
        userChoiceMessage.innerText =
            `You chose: ${formatChoice(userChoice)}`;

        computerChoiceMessage.innerText =
            `Computer chose: ${formatChoice(computer)}`;


        // Find winner
        const winner =
            playGame(userChoice, computer);


        // Remove previous result colors
        resultMessage.classList.remove(
            "win",
            "lose",
            "draw"
        );


        // User wins
        if (winner === "user") {

            userScore++;

            userScoreElement.innerText =
                userScore;

            resultMessage.innerText =
                "You Win!";

            resultMessage.classList.add("win");

        }


        // Computer wins
        else if (winner === "computer") {

            computerScore++;

            computerScoreElement.innerText =
                computerScore;

            resultMessage.innerText =
                "Computer Wins!";

            resultMessage.classList.add("lose");

        }


        // Draw
        else {

            resultMessage.innerText =
                "It's a Draw!";

            resultMessage.classList.add("draw");
        }

    });

});


// Reset game
resetButton.addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;


    userScoreElement.innerText =
        userScore;

    computerScoreElement.innerText =
        computerScore;


    userChoiceMessage.innerText =
        "You chose: -";

    computerChoiceMessage.innerText =
        "Computer chose: -";


    resultMessage.innerText = "";


    // Remove result color
    resultMessage.classList.remove(
        "win",
        "lose",
        "draw"
    );

    resultMessage.style.transform = "scale(1.1)";

    setTimeout(() => {
        resultMessage.style.transform = "scale(1)";}, 200);

});