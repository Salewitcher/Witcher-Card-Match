// Modal Idea taken from W3Schools
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Track mistakes
var mistakes = 0;
// Card Names
var cardList = [
    "ciri",
    "dethlaff",
    "eredin",
    "fiend",
    "foglet",
    "geralt2",
    "leto",
    "oligierd",
    "werewolf",
    "yennefer"
];

var cardSet;
var gameBoard = [];
var rows = 4;
var columns = 5;

// Page Load
window.onload = function () {
    shuffleCards();
    startGame();
};

function shuffleCards() {
    cardSet = cardList.concat(cardList); //Duplicate cards
}
// Shuffle cards
for (let i = 0; i < cardSet.lenght; i++) {
    let r = Math.floor(Math.random() * cardSet.lenght);
    let temporary = cardSet[i];
    cardSet[i] = cardSet[t];
    cardSet[t] = temporary;
}

function startGame() {
    // Set cards on board
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            // <img>
            let cards = document.createElement('img');
            cards.id = r.toString() + '-' + c.toString();
            cards.src = cardImg + '.jpg';
            cards.classList.add('cards');
            document.getElementById('game-board').append(cards);
        }
    }
}