/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "A drop in the bucket",
      "A foot in the door",
      "All in all",
      "As old as the hills",
      "Bite the dust"
    ];
    this.activePhrase = null;
  }

  startGame() {
    // hide start screen #overlay
    const overlay = $("#overlay");
    overlay.hide();

    // call getRandomPhrase() and set activePhrase property with random phrase
    this.activePhrase = this.getRandomPhrase();

    // add phrase to the board by calling addPhraseToDisplay() on the active phrase object
    this.addPhraseToDisplay();
  }

  getRandomPhrase() {
    // retrieve random phrase and return it
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  handleInteraction() {
    // check to see button clicked by player matches a letter in phrase
    // then direct game depending correct or incorrect guess.
  }

  removeLife() {
    // remove a life from the scoreboard (replace liveHeart.png with a lostHeart.png)
    // increment missed property
    // if out of guesses then call gameOver()
  }

  checkForWin() {
    // check to see if player has revealed all of the letters in active phrase
  }

  gameOver() {
    // show original start screen overlay
    // update overlay h1 element with friendly win or loss message
    // replace the overlay start css class with either win or lose css class
  }
}
