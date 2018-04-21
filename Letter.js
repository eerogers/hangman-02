//var lettersArr = []
function Letter (letter, isGuessed) {
    this.letter = letter
    this.isGuessed = isGuessed
    this.checkGuess = function() {
        if(this.letter == guess) {
            this.isGuessed = true
            console.log(this.isGuessed)
        }
    }
    this.howDisplay = function() {
        if(this.isGuessed == true) {
            console.log(this.letter)
        }
        else {
            console.log("_")
        }
    } 
}

module.exports = Letter;