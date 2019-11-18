/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phrase = this.phrase;
    // alert(phrase);
    // let htmlPhrase = '<div id="phrase" class="section"><ul>';
    let htmlPhrase = "";
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === " ") {
        htmlPhrase += '<li class="space"> </li>';
      } else {
        htmlPhrase +=
          '<li class="hide letter ' + phrase[i] + '">' + phrase[i] + "</li>";
      }
    }
    // phrase.forEach(letter => {
    //   if (letter === " ") {
    //     htmlPhrase += '<li class="space"> </li>';
    //   } else {
    //     htmlPhrase +=
    //       '<li class="hide letter ' + letter + '">' + letter + "</li>";
    //   }
    // });
    //htmlPhrase += "</ul></div>";
    $("#phrase").html(htmlPhrase);
    return htmlPhrase;
  }

  // checks to see if letter user selected matches letter in phrase
  checkLetter() {}

  // reveals letter(s) on the board that matches the selected letter.
  showMatchedLetter() {}
}
