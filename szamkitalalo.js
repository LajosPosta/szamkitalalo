let target;

function generateTarget() {
    return Math.trunc(Math.random() * 100 + 1 );
}

function startGame() {
    target = generateTarget(); 
}

startGame();