// import "./styles.css";
const message = document.querySelector(".message");
const check = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const body = document.querySelector("body");

check.addEventListener("click", checkGuess);
again.addEventListener("click", playAgain);

let score = 20;
let highScore = 0;

function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);
  // When no guess
  if (!guess) {
    displayMessage("No Number!");
    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage("You won!");
    number.textContent = secretNumber;
    body.style.background = "#60b347";
    number.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // message.textContent = guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
      body.style.backgroundColor = "red";
    }
  }
}

function playAgain() {
  reset();
}

function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.background = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
}

function displayMessage(mess) {
  message.textContent = mess;
}
