// JavaScript source code
let numberOfPlayer = 0;
let playingPlayer = 0;
let playerCase;

function onload() {
    let buttons = document.getElementsByClassName("buttonElement");

    for (let i = 0; i < buttons.length; i++) {
        if (buttons.item(i).id != "newGame"){
            buttons.item(i).disabled = true;
        }
    }
}



function newGame() {
    let buttons = document.getElementsByClassName("buttonElement");

    for (let i = 0; i < buttons.length; i++) {
        if (buttons.item(i).id === "newGame") {
            buttons.item(i).disabled = true;
        } else if (buttons.item(i).id === "validate") {
            buttons.item(i).disabled = false;
        }
    }

    alert("Indiquer le nombre de joueur (inférieur ou égal à 6) et cliquer sur Valider");
}

function validate() {
    let inputNumberOfPlayer = document.getElementById("numberOfPlayer");
    numberOfPlayer = inputNumberOfPlayer.value;
    if (numberOfPlayer > 6) {
        alert("Le nombre de joueur doit être inférieur à 6");
    }
    else {
        prepGame();
    }
}

function prepGame() {
    addPlayerDiv();

    playingPlayer = 1;
    playerCase = Array(numberOfPlayer).fill(1);

    gamePlay();
}


function addPlayerDiv() {

    for (let i = 1; i <= numberOfPlayer; i++) { 
        let img = document.createElement('img');
        img.src = 'player'+i+'.png';
        img.id = 'player' + i
        img.style.display = 'none';
        document.getElementById('divPlateau').appendChild(img);
    }
   
}

function gamePlay() {
    alert("Game ON");
    document.getElementById("runDice").disabled = false;
    document.getElementById("textPlayer").innerText = "Joueur" + playingPlayer + "c'est à vous !";

    let player = document.getElementById('player' + playingPlayer)
    player.style.display = true;
    let actualPlayerCase = document.getElementById('case' + playerCase[playingPlayer - 1]);

    player.style.position = "fixed";
    player.style.left = actualPlayerCase.getBoundingClientRect().x + "px";
    player.style.top = actualPlayerCase.getBoundingClientRect().y + "px";
    player.style.zIndex = 20;
    //actualPlayerCase.getBoundingClientRect();
}

function play() {
    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;
    alert("Resultat des dés : ", diceRoll1 + diceRoll2);

    let newCase = playerCase[playingPlayer - 1] + diceRoll1 + diceRoll2;
    playerCase[playingPlayer - 1] = newCase;

    checkNewPosition();
    movePlayer();

}


function checkNewPosition() {
    //add condition
}

function movePlayer() {

    //TO DO : move player to new position
}