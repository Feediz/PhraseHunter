/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

$("#btn__reset").click(() => {
  game = new Game();
  game.startGame();
});

$("#qwerty button").on("click", e => {
  const clicked = e.target.textContent;
  //alert(`Clicked ${clicked}`);
  game.handleInteraction(clicked);
});
