/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// define the game variable to hold the game object
let game;

// listen and handle the "Start Game" button click
$("#btn__reset").click(() => {
  // init the game object
  game = new Game();

  // let's start the game
  game.startGame();
});

// handle when a user clicks on the virtual keyboard
$("#qwerty button").on("click", e => {

  // reference the letter button that was clicked
  const buttonClicked = e.target;

  // handle user interaction with the game
  game.handleInteraction(buttonClicked, 'virtual');
});

// handle when a user clicks on the physical keyboard
$(document).keypress((e) => {
  if($("#overlay").is(":hidden")) {
      // we grab the letter that was pressed
      let keyPressed = String.fromCharCode( e.which );

      // regular expression to only handle letters
      const regExLetters = /^[a-zA-Z]+$/;
      if(regExLetters.test(keyPressed)) {
        // handle user interaction with the game
        game.handleInteraction(keyPressed, "key");
      }
    }
});
