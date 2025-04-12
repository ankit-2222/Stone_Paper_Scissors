let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const user = document.querySelector("#userScore");
const comp = document.querySelector("#compScore");
const endGame = document.querySelector("#endGameBtn");
const endGameMsg = document.querySelector(".endGameMsg");
const endMsg = document.querySelector("#endMsg");
const reset = document.querySelector("#reset");

const resetData = () => {
    endGameMsg.classList.add("hide");
}

reset.addEventListener("click", () => resetData());

const end = () => {
    endGameMsg.classList.remove("hide");
    endMsg.innerText = `Your score: ${userScore} \n Computer score: ${compScore}`;
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play your move...";
    msg.style.background = "rgba(255, 255, 255, 0.2)";
    comp.innerText = compScore;
    user.innerText = userScore;
}

endGame.addEventListener("click", () => end());

const compChoiceGenerator = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("It's a draw.");
    msg.innerText = "Game was draw! Play again.";
    msg.style.background = "rgba(255, 255, 255, 0.2)";
    msg.classList.add("scale-effect");
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        msg.innerText = "You win..🎉";
        user.innerText = userScore;
        msg.style.background = "#5eff00ba";
        msg.classList.add("scale-effect");
    } else{
        compScore++;
        msg.innerText = "You lose..☹️";
        comp.innerText = compScore;
        msg.style.background = "#a30a0a94";
        msg.classList.add("scale-effect");
    }
}

const playGame = (userChoice) => {
    const compChoice = compChoiceGenerator();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == "rock") {
            userWin = compChoice == "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = compChoice == "scissors" ? false : true;
        } else if(userChoice == "scissors") {
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    } 
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        msg.classList.remove("scale-effect");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});