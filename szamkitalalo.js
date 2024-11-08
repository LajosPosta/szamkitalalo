let guessListContainer = document.querySelector(".js-guess-container");
let currentQuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button");
let guessSubmitButton = document.querySelector(".js-submit-guess");


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

function submitGuess(event) { // 
    event.preventDefault(); //4. lépés submitGuess függvénynek van egy eseményobjektuma és a preventDefault() megakadályozom az űrlap beküldését
    let guessValue = Number.parseInt(currentQuessField.value); // 5. lépés lekérem (kinyerem a játékos tippjét) a  currentQuessField-ből a jelenlegi értékét aminek a típusa string
    console.log(guessValue, typeof guessValue); // 4. lépés
    alert("klikk");
}

function startGame() {
    resetGame();
    target = generateTarget(); 
}

startGame();

newGameButton.addEventListener("click", startGame);
guessSubmitButton.addEventListener("click", submitGuess)