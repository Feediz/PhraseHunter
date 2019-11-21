/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

$("#btn__reset").click(() => {
  game = new Game();
  game.startGame();
});

$("#qwerty button").on("click", e => {
  const buttonClicked = e.target;
  
  //alert(`Clicked ${clicked}`);
  game.handleInteraction(buttonClicked, 'virtual');
});



  $(document).keypress((e) => {
    if($("#overlay").is(":hidden")) {
        //console.log(e.which);
        // console.log('keypress', String.fromCharCode( e.which ));
        let keyPressed = String.fromCharCode( e.which );
        const regExLetters = /^[a-zA-Z]+$/;
        if(regExLetters.test(keyPressed)) {
          game.handleInteraction(keyPressed, "key");
        }
      }
  });
