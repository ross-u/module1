let hangman;

class Hangman {
  constructor() {
    this.words = ['hello', 'ironhacker']; 
    this.secretWord = this.getWord(); 
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  getWord () {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }

  initializeGame() {
    initializeCanvas();
    drawCharacters(this.secretWord, this.secretWord.length);
  }

  checkIfLetter(key, keyCode) {
    if(keyCode > 64 && keyCode < 91) {
      this.checkClickedLetters(key);
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // console.log('TYPEOF LETTER', typeof letter);
    if(this.letters.includes(letter)) { // if the letter is included in the letters already clicked
      console.log("letter already clicked"); // here you can alert
      return false;
    } else {
      if(this.secretWord.includes(letter)) { // if the letter was not already clicked and is included in the secret word
        // console.log("new letter and correct letter") 
        this.addCorrectLetter(letter);       
        this.checkWinner();
      } else {
        // console.log("new letter but incorrect letter") 
        this.addWrongLetter(letter)
        // console.log(this.errorsLeft)
        this.checkGameOver();
      }
    }
  }

  checkWinner() {
    if(this.guessedLetter.length === this.secretWord.length) {
      drawWinImg();
      return true;
    } else {
      return false;
    }
  }

  checkGameOver() {
    if(this.errorsLeft === 0) {
      drawLooseImg();
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.letters.push(letter);
    this.guessedLetters += letter;
    drawCorrectLetters(letter);
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
    drawHangman(this.errorsLeft);
    drawAllLetters(this.letters);
  }

  returnIndexPositions(letter) {
    const indexes = [];
    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.secretWord[i] === letter) {
        indexes.push(i);
      }
    }
    return indexes;
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.initializeGame();
  console.log("New hangman")
};

document.onkeydown = function (e) {
  let key = e.key;
  let keyCode = e.keyCode;
  hangman.checkIfLetter(key, keyCode);
};
