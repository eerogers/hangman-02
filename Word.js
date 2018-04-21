var letter = require('./Letter.js') 
var a= new letter ("a", true)
var b= new letter ("b", false)
var c= new letter ("c", false)
var d= new letter ("d", false) 
var e= new letter ("e", false) 
var f= new letter ("f", false)
var g= new letter ("g", false)
var h= new letter ("h", false)
var i= new letter ("i", false)
var j= new letter ("j", true)
var k= new letter ("k", false)
var l= new letter ("l", false)
var m= new letter ("m", false)
var n= new letter ("n", false)
var o= new letter ("o", false)
var p= new letter ("p", false)
var q= new letter ("q", false)
var r= new letter ("r", false)
var s= new letter ("s", false)
var t= new letter ("t", false)
var u= new letter ("u", false)
var v= new letter ("v", false)
var w= new letter ("w", false)
var x= new letter ("x", false)
var y= new letter ("y", false) 
var z= new letter ("z", false)
var wordString = ""
function Word (wordArr) {
    this.wordArr = wordArr
    this.runDisFunction = function(){
        for(i=0; i<wordArr.length; i++){
            this.wordArr[i].howDisplay({
            })
        }
    }
    this.runCheck = function(){
        for(i=0; i<lettersArr.length; i++){

        }
    }
}

var newWord = new Word([j,a,c,k,p,o,t])
//console.log(randomWords[Math.floor(Math.random()*randomWords.length)])
newWord.runDisFunction()
//console.log(newWord.wordArr)
//console.log(randomWords.words[0])
module.exports = {
    wordString: wordString
}

//var randomWords = { words:
//    [{1 : j,a,c,k,p,o,t}, 
//    {2: v,i,d,e,o}, 
//    {3: m,o,u,n,t,a,i,n},
//    {4: a,l,p,h,a,b,e,t}, 
//    {5: z,e,b,r,a}, 
//    {6: r,i,v,e,r}, 
//    {7: t,y,p,e,w,r,i,t,e,r}]}