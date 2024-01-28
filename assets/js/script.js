// Modal Idea taken from W3Schools
// Get the modal
const modal = document.getElementById("instructionModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener('click', makeBlock);

function makeBlock() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', hideBlock);

function hideBlock() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Code from "https://www.youtube.com/watch?v=wz9jeI9M9hI"
let errors = 0;
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

let matchedPairs = 0;
let cardSet;
let board = [];
let rows = 4;
let columns = 5;

let card1Selected;
let card2Selected;

window.onload = function () {
    shuffleCards();
    startGame();
};

function shuffleCards() {
    cardSet = cardList.concat(cardList); //two of each card
    console.log(cardSet);
    //shuffle
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); //get random index
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    //arrange the board 4x5
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            // <img id="0-0" class="card" src="./assets/images/back.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    console.log(board);
    setTimeout(hideCards, 1000);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "./assets/images/back.jpg";
            card.alt = "Image trapped between worlds";
        }
    }
}

function selectCard() {

    if (this.src.includes("back")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = "./assets/images/" + board[r][c] + ".jpg";
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = "./assets/images/" + board[r][c] + ".jpg";
            setTimeout(update, 1000);
        }
    }

}

function update() {
    // When player hits 10 matched cards show win message
    if (card1Selected.src === card2Selected.src) {
        matchedPairs += 1;
        if (matchedPairs === cardList.length) {
            showWinMessage();
        }
    } else {
        // If cards aren't the same, flip both back
        card1Selected.src = "./assets/images/back.jpg";
        card2Selected.src = "./assets/images/back.jpg";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    }

    card1Selected = null;
    card2Selected = null;
}

// When show win message pops up display the modal with play again or quit buttons
function showWinMessage() {
    let modal = document.getElementById("winModal");
    modal.style.display = "block";
    document.getElementById("modalText").innerText = "Congratulations! You've matched all pairs.";
    document.getElementById("modalButtons").innerHTML = `
        <button onclick="playAgain()">Try Again</button>
        <button onclick="quitGame()">Quit</button>
    `;
}

// Play again and quit functions
function playAgain() {
    resetGame();
    let modal = document.getElementById("winModal");
    modal.style.display = "none";
}

function quitGame() {
    let modal = document.getElementById("winModal");
    modal.style.display = "none";
    
}

function resetGame() {
    matchedPairs = 0;
    errors = 0;
    document.getElementById("errors").innerText = errors;
    shuffleCards();
    startGame();
}