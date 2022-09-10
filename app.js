let scoreTable = document.getElementById("header-score-table");
let paper = document.getElementById("button-of-paper");
let scissors = document.getElementById("button-of-scissors");
let rock = document.getElementById("button-of-rock");
let buttons = document.getElementsByClassName("buttons");
let result = document.getElementById("header-result");
let gameTable = document.getElementById("container-body");

const array = ["Paper", "Scissors", "Rock"];
let choose = "";
let pcChoose = "";
let score = 0;

paper.onclick = function () {
    choose = array[0];
    random();
    check();
    turnAnimation();

}
scissors.onclick = function () {
    choose = array[1];
    random();
    check();
    turnAnimation();

}
rock.onclick = function () {
    choose = array[2];
    random();
    check();
    turnAnimation();

}

function turnAnimation() {
    gameTable.classList.add("turn");
    setTimeout(() => {
        gameTable.classList.remove("turn");
    }, 4000);
}


function random() {
    let randomNumber = Math.floor((Math.random() * 3));
    pcChoose = array[randomNumber];
}
function printResults(text) {
    setTimeout(() => {
        result.innerHTML = (text);
    }, 4000);

}
function check() {

    if (pcChoose == choose) {
        printResults("SCORELESS");

    }
    else if (pcChoose == array[0] && choose == array[1]) {
        printResults("PLAYER WIN !");
        score++;

    }
    else if (pcChoose == array[0] && choose == array[2]) {
        printResults("COMPUTER WIN !");
        score--;
    }
    else if (pcChoose == array[1] && choose == array[0]) {
        printResults("COMPUTER WIN !");
        score--;

    }
    else if (pcChoose == array[1] && choose == array[2]) {
        printResults("PLAYER WIN !");
        score++;

    }
    else if (pcChoose == array[2] && choose == array[0]) {
        printResults("PLAYER WIN !");
        score++;

    }
    else if (pcChoose == array[2] && choose == array[1]) {
        printResults("COMPUTER WIN !");
        score--;
    }
    else {
        printResults("START THE GAME !");
    }

    setTimeout(() => {
        scoreTable.innerHTML = (score);

    }, 4000);
}
