import Deck from "./deck.js";
import Game from "./game.js";

// let player1 = prompt('Player1 enter your name');
// let player2 = prompt('Player2 enter your name');

let player1 = "Eric";
let player2 = "amber";

const game = new Game({ player1, player2 });

//game.compare();

//console.log(game.deck);
//console.log(game.depo);

const beginGame = () => {
  alert(
    "Welcome! Lets play war, high card wins. You are the red deck Good luck!"
  );
  console.log("beginGame");
  game.shuffle();
  game.deal();
  //game.draw();
};

const keepPlaying = () => {
  game.draw();
  game.compare();
  console.log(game.player1.hand);
  console.log(game.player2.hand);
};

const startGame = document.getElementById("start-button");
startGame.addEventListener("click", beginGame);

const dealAgain = document.getElementById("play-button");
dealAgain.addEventListener("click", keepPlaying);

// function log() {

// }

//empty pot after each round
//check transfer of war card and where splice/slice is happening
