import Game from "./game.js";

// let player1 = prompt('Player1 enter your name');
// let player2 = prompt('Player2 enter your name');

let player1 = 'Eric';
let player2 = 'Amber';

const game = new Game({player1, player2});
game.shuffle();
game.deal();
game.draw();
game.compare();





// console.log(game.player1.hand);
// console.log(game.player2.hand);
// console.log(game.deck)
// console.log(game.depo)

























