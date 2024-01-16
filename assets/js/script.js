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
let mistakes = 0;
// Card Names
let cardList = [
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

let cardSet;
let gameBoard = [];
let rows = 4;
let columns = 5;

// Page Load
window.onload = function () {
    shuffleCards();
    startGame();
};

function shuffleCards() {
    cardSet = cardList.concat(cardList); //Duplicate cards
}