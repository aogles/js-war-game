import Deck from "./deck.js";
import Player from "./player.js";

////// Game Constuctor //////

export default function Game({ player1, player2 }) {
  this.player1 = new Player({ name: player1 });
  this.player2 = new Player({ name: player2 });
  this.deck = new Deck();
  this.depo = [];

  ////// Shuffle Cards //////
  Game.prototype.shuffle = function () {
    // this will get all 52 card for th for loop
    const cards = this.deck.cards;

    for (let i = 0; i < cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * cards.length);
      let tempCard = cards[i];
      cards[i] = cards[randomIndex];
      cards[randomIndex] = tempCard;
    }
  };

  ////// Deal Cards //////
  Game.prototype.deal = function () {
    //add start button to fire this function
    const cards = this.deck.cards;

    this.player1.hand = cards.filter(function (item, index) {
      return !(index % 2); //filter takes in function will loop through cards array and passes to function
    });
    this.player2.hand = cards.filter(function (item, index) {
      return index % 2; //filter takes in function will loop through cards array and passes to function
    }); //% divides and gives you the remainder
  };

  ////// Draw Cards(place into game depo) //////
  Game.prototype.draw = function () {
    const player1Card = this.player1.hand.shift(0);
    const player2Card = this.player2.hand.shift(0);
    this.depo = [player1Card, player2Card];
  };

  ////// Compare Cards //////
  Game.prototype.compare = function () {
    if (this.player1.hand === 0) {
      alert("You ran out of cards, you lose! refresh to play again.");
    }
    if (this.player2.hand === 0) {
      alert("Computer ran out of cards, You win! Refresh page to play again.");
    } else if (this.depo[0].value > this.depo[1].value) {
      this.player1.hand = [...this.player1.hand, ...this.depo];
      //this.player2.hand = [this.player2.hand];
      //this.depo = [];
      console.log("player1 wins round");
      console.log(this.player1.hand.length);
      // console.log(this.depo)
    } else if (this.depo[1].value > this.depo[0].value) {
      this.player2.hand = [...this.player2.hand, ...this.depo];
      //this.player1.hand = [this.player1.hand];
      //this.depo = [];
      console.log("player2 wins round");
      console.log(this.player2.hand.length);
      //console.log(this.depo);
    } else {
      console.log("This means war!");
      this.war(this.player1, this.player2);
      this.depo = [
        ...this.player1.hand.splice(0, 3),
        ...this.player2.hand.splice(0, 3),
      ];
    } //this is the draw 3 for war and adding to the pot
  };

  Game.prototype.war = function (player1, player2) {
    //console.log("war is running");

    const player1WarCards = player1.hand.splice(0, 3);
    const player2WarCards = player2.hand.splice(0, 3);
    console.log(player1WarCards);
    this.compareWar(player1WarCards, player2WarCards);
  };

  Game.prototype.compareWar = function (player1WarCards, player2WarCards) {
    console.log(player1WarCards);
    // console.log(player1WarCards[2]);
    // console.log(player2WarCards[2]);
    let player1WarCard = player1WarCards[2].value;
    let player2WarCard = player2WarCards[2].value;
    this.depo = [...this.depo, ...player1WarCards, ...player2WarCards];

    if (this.player1.hand < 5) {
      alert(
        "You dont have enough cards to play war, you lose! refresh the page to play again."
      );
    } else if (this.player2.hand < 5) {
      alert(
        "Computer does not have enough cards to play war, You win! refresh the page to play again."
      );
    } else if (player1WarCard > player2WarCard) {
      console.log(this.depo);
      this.player1.hand = [
        ...this.player1.hand,
        ...this.depo,
        ...player1WarCards,
        ...player2WarCards,
      ];
      console.log("Player1 Wins");
    } else if (player2WarCard > player1WarCard) {
      console.log(this.depo);
      this.player2.hand = [
        ...this.player2.hand,
        ...this.depo,
        ...player2WarCards,
        ...player1WarCards,
      ];
      console.log("player2 Wins");
    }
  };
}
