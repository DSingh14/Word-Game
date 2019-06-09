var randomWords = ["rose", "lily", "jasmine", "Mogra"];
var choosenWord = randomWords;
var letterTyped = null;
var win = 0;
var losses = 0;
var separatedWords = [];
var wrongTypedLetters = [];
var rightTypedLetters = [];

//computer has to choose the random words
choosenWords = choosenWord[Math.floor(Math.random() * randomWords.length)];
{
    console.log(choosenWord)
}
var generateUnderscore = () => {
    for (var i = 0; i < choosenWords.length; i++) {
        separatedWords.push('-');
    }
    return separatedWords;
}
console.log(generateUnderscore());