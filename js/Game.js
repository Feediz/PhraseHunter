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
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    // retrieve random phrase and return it
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomIndex];
    return new Phrase(randomPhrase);
  }

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(clickedElement) {
    // check to see button clicked by player matches a letter in phrase
    const checkLetter = this.activePhrase.checkLetter(clickedElement.textContent);
    
    // disable element
    clickedElement.disabled = true;
    
    
    //console.log(clickedElement);
    //alert(`Clicked ${checkLetter}`);
    if (checkLetter) {
      // append chosen css if guessed letter is correct
      clickedElement.classList.add("chosen");

      // show guessed letter
      this.activePhrase.showMatchedLetter(clickedElement.textContent);

      // check if player won game
      if(this.checkForWin()) {
        this.gameOver("won");
      }

    } else {
      //
      clickedElement.classList.add("wrong");
      this.removeLife();

    }
    // then direct game depending correct or incorrect guess.
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    this.missed += 1;

    let scoreboardChanged = false;
    
    const scoreBoardElement = $('#scoreboard li');
    scoreBoardElement.each( (i, li) => {
      // reference scoreboard image element
      let img = li.firstElementChild;
      let currentImgName = img.src.substring(img.src.lastIndexOf("/")+1, img.src.length);

      if(currentImgName === 'liveHeart.png' && scoreboardChanged === false) {
        img.src = 'images/lostHeart.png';
        scoreboardChanged = true;
      }
    });
    if(scoreboardChanged === false) {
      this.gameOver('lost');
    }
    // remove a life from the scoreboard (replace liveHeart.png with a lostHeart.png)
    // increment missed property
    // if out of guesses then call gameOver()
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't won
  */
  checkForWin() {
    let won = true;    
    const phraseElement = $("#phrase li");
    phraseElement.each((index, li) => {
      if($(li).hasClass('hide')){
        won = false;
      }
    });
    return won;
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    // show original start screen overlay
    const overlay = $("#overlay");
    const overlay_msg = $("#game-over-message");

    if(gameWon === 'won') {
      // game won
      overlay.addClass('win');
      overlay_msg.text("Congrats! You won!!!");
    } else {
      // game lost
      overlay.addClass('lose');
      overlay_msg.text("Bummer - No worries try again.");
    }
    // reset game
    this.resetGame();
    overlay.show();
    // update overlay h1 element with friendly win or loss message
    // replace the overlay start css class with either win or lose css class
  }


  resetGame() {
    // remove phrase
    $("#phrase ul").empty();

    // reset the onscreen keyboard css
    const qwertyKey = $("#qwerty button");
    qwertyKey.each((i, e) => {
      e.classList.remove("chosen");
      e.classList.remove("wrong");
      e.classList.add("css");
    });

    // change the scoreboard images
    const scoreBoardElement = $('#scoreboard li');
    scoreBoardElement.each( (i, li) => {
      let img = li.firstElementChild;
      img.src = 'images/liveHeart.png';
    });
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrase() {
    return [
      { phrase: "A drop in the bucket" },
      { phrase: "A foot in the door" },
      { phrase: "All in all" },
      { phrase: "As old as the hills" },
      { phrase: "Bite the dust" }
    ];
  }
}
