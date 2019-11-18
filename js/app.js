/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase();
const game = new Game();

// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - Phrase: ${phrase.phrase}`);
// });
// const logPhrase = phrase => {
//   console.log(`Phrase - phrase: `, phrase.phrase);
// };
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

$("#btn__reset").click(() => {
  game.startGame();
});

$("#qwerty button").on("click", e => {
  const clicked = e.target.textContent;
  game.handleInteraction();
});
