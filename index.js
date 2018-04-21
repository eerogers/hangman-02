var inq = require("inquirer")
var pmpt = inq.createPromptModule()
var word = require('./Word.js')
var qs = [
    {
        type: 'input',
        name: 'q1',
        message: 'Guess a Letter!'
    }
]
pmpt(qs).then(function(r){
    console.log(r)
})