/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
$("#btn__reset").click(() => {
  game.startGame();
});

$("#qwerty button").on("click", e => {
  const clicked = e.target.textContent;
  game.handleInteraction();
});
