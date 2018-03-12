var express = require('express');
var app = express();

app.get('/', function (request, response) {
 response.send('Hello World!');
});

app.get('/home', function (request, response) {
 response.send('Hello World!');
});

app.get('/reverse/:inputText', function (request, response){
    var inputText = request.params["inputText"];
    var reversedText = inputText.split('').reverse().join('');
    response.send(reversedText);
})


app.get('/add/a=:inputA&b=:inputB', function (request, response){
    var first = request.params['inputA'];
    var second = request.params['inputB'];
    var sum = parseInt(first) + parseInt(second);
    response.send(sum.toString());
})

app.get('/piglatin/:userSentence', function (request, response){
    var sentence = request.params['userSentence']
    var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O","U"];
    var inputArray = sentence.split("+");
    var pigLatin = [];

    for(let i=0; i < inputArray.length; i++){
        let checkedWord = inputArray[i] // setting checkedWord to each word in the Array
        // iterate through every letter to check for "qu"
        for (let c=0; c < checkedWord.length; c++){
            if (checkedWord[c] === 'q' && checkedWord[c+1] === 'u') {
                let beg = checkedWord.slice(0, checkedWord.indexOf(checkedWord[c+2]));
                let end = checkedWord.slice(c+2);
                let newWord = end + beg +"ay";
                pigLatin.push(newWord);
                break;
            }
        // check for first-letter vowel
            else if (vowels.includes(checkedWord[0])) {
                let newWord = checkedWord + "way"
                pigLatin.push(newWord);
                break;
            }
        //check for first letter consanant
            else {
                let spliced = checkedWord.slice(0,1);
                let ord = checkedWord.slice(1);
                let newWord = ord + spliced +"ay";
                pigLatin.push(newWord);
                break;
            }
        }
    }
    var result = pigLatin.join(" ");
    response.send(result);
})





app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
