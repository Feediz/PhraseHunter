/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
//const phrase = new Phrase(game.getRandomPhrase());

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

//phrase.addPhraseToDisplay();

$("#btn__reset").click(() => {
  game.startGame();
});

$("#qwerty button").on("click", e => {
  const clicked = e.target.textContent;
  game.handleInteraction();
});
