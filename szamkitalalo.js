let guessListContainer = document.querySelector(".js-guess-container");
let currentQuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button");

let target;

function generateTarget() {
    return Math.trunc(Math.random() * 100 + 1 );
}

function resetGame() {
    // korábbi tippek törlése
    guessListContainer.innerHTML = "";
    // inputmező tartamának törlése
    currentQuessField.value = "";
}

function startGame() {
    resetGame();
    target = generateTarget(); 
}

startGame();

newGameButton.addEventListener("click", startGame);