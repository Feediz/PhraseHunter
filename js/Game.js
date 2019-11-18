/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrase();
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

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
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

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrase() {
    // return [
    //   "A drop in the bucket",
    //   "A foot in the door",
    //   "All in all",
    //   "As old as the hills",
    //   "Bite the dust"
    // ];

    return [
      { phrase: "A drop in the bucket" },
      { phrase: "A foot in the door" },
      { phrase: "All in all" },
      { phrase: "As old as the hills" },
      { phrase: "Bite the dust" }
    ];
  }
}
