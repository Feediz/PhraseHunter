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
    //htmlPhrase += "</ul></div>";
    $("#phrase ul").html(htmlPhrase);
    return htmlPhrase;
  }

  // checks to see if letter user selected matches letter in phrase
  checkLetter(clickedLetter) {
    const phrase = this.phrase;

    for (let i = 0; i < phrase.length; i++) {
      // alert(`Clicked ${clickedLetter} ||| Phrase: ${phrase[i]}`);
      if (phrase[i] === clickedLetter) {
        // return true;
        this.showMatchedLetter(clickedLetter);
        return true;
      } else {
        return false;
      }
    }
  }

  // reveals letter(s) on the board that matches the selected letter.
  showMatchedLetter(clickedLetter) {
    //const phraseElement = document.querySelector("#phrase li");
    const phraseElement = $("#phrase li");
    phraseElement.each((index, li) => {
      if ($(li).text() === clickedLetter) {
        $(li).removeClass("hide");
        $(li).addClass("show");
      }
    });
    for (let i = 0; i < phraseElement.length; i++) {
      if (phraseElement[i].textContent === clickedLetter) {
        return true;
      } else {
        return false;
      }
    }
  }
}
