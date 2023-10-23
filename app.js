let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const prevGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let totalGuesses = 0;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert("Enter a valid Number");
  } else {
    if (totalGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Right Guess`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is lower than the random number`);
  } else {
    displayMessage(`Number is higher than the random number`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuesses.innerHTML += `${guess} `;
  totalGuesses++;
  remainingGuesses.innerHTML = `${10 - totalGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">Play Again</button>`;
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute("disabled");
    prevGuesses.innerHTML = "";
    remainingGuesses.innerHTML = "10";
    lowOrHi.innerHTML = "";
    startOver.removeChild(p);
    totalGuesses = 0;
    playGame = true;
  });
}
