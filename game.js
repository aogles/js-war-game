import Cards from "./card.js";
import Deck from "./deck.js";

import Player from "./player.js";

/*const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  } */

///////////Game constructor with players and play names//////

let player1 = "Eric";
let player2 = "Amber";
//   let testing = prompt('Enter your name');

export default function Game() {
  (this.player1 = new Player({ name: player1 })),
    (this.player2 = new Player({ name: player2 }));
  this.deck = new Deck();
}

/////////shuffle the cards function////////
Game.prototype.shuffle = function (deck) {
  // this will get all 52 card for th for loop
  for (let i = 0; i < deck.length; i++) {
    let randomIndex = Math.floor(Math.random() * 52);
    // console.log(randomIndex);
    // console.log(deck[i], deck[randomIndex])
    deck[i] = deck[randomIndex];
    deck[randomIndex] = deck[i];
  }

  return "randomIndex";
};

// math.floor(math.random) wil generate a random integer during the for-loop
//////////split deck////////////
Game.prototype.splitDeck = function(player1Deck, player2Deck){
  for(let i = 0; i < this.deck.length / 2; i++){
      player1.push(this.deck[i]);
      player2.push(this.deck[this.deck.length - i - 1]);
  }
//console.log(player1);
};

/////////deal the cards function/////////

Game.prototype.deal = function () {
  //add start button to fire this function
  this.player1.hand = this.deck.cards.filter(function (item, index) {
    return !(index % 2); //filter takes in function will loop through cards array and passes to function
  });
  this.player2.hand = this.deck.cards.filter(function (item, index) {
    return index % 2; //filter takes in function will loop through cards array and passes to function
  }); //% divides and gives you the remainder
};

//////////////////compare the cards function/////////

Game.prototype.compare = function () {
  if (this.depo[0].value > this.depo[1]) {
    this.player1.hand = [...this.player1, ...this.depo];
  } else if (this.depo[0].value < this.depo[1].value) {
    this.player2.hand = [...this.player2.hand, ...this.depo];
    this.depo = [];
  } else {
    this.depo = [...this.player1.hand.splice(0, 3)];
  } //this is the draw 3 for war and adding to the pot
};

////////////Function to draw cards and shift into depo/pot////

Game.prototype.draw = function () {
  const player1cards = this.player1.hand.shift(); //shift removes first value in an array
  //addeventlistener button for draw
  this.depo = [player1, player2, ...this.depo];

  this.compare();
};

/////////////////////encompasses functions/////

const startGameButton = document.getElementById("start-button");

Game.prototype.startGame = function () {
  //this could encompass the this.shuffle,deal, and play
  console.log(player1.game.deck);
  //game.shuffle(game.deck.cards);
  game.splitDeck(game.deck.cards);
  game.deal(game.deck.cards);

  /*if (stop) {
            startGame()
            return
          }
        
          if (gameInPlay) {
           resetRound()
          } else {
            flipCards()
          } */

  // this.shuffle(this.deck);
  // console.log(Deck())

  // this.shuffle(this.deck)
};

function resetRound() {
  resetRound = false;
  Player1.deck = []; //(reset array)
  Player2.deck = [];
}

function flipCards() {
  gameInPlay = true;
  const player1hand = player1.deck.shift(); //should flip first card in array at start of round
  const player2hand = player2.deck.shift();
}

const game = new Game();

startGameButton.addEventListener("click", game.startGame);
