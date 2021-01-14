var staten;
var buttons;
var totalguesses = 0;
var rightguesses = 0;
var maxlifes = 7;
var totalRightLetters = 0;
var chosenLetters;
var guessedLetters = [];

staten = ['Alabama','Alaska','Arizona','Arkansas','Californië' ,'Colorado','Connecticut','Delaware','Florida','Georgia','HawaiiIdaho','Illinois',
     'Indiana','Iowa','Kansas','Kentucky', 'Louisiana','Maine','Maryland','Massachusetts', 'Michigan','Minnesota','Mississippi','Missouri','Montana',
     'Nebraska','Nevada' ,'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
     'Rhode Island','South Carolina','South Dakota','Tennessee','texas','Utah','Vermont','Virginia','Washington','Washington DC','West Virginia','Wisconsin','Wyoming']


alfabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var randomWordPicker = Math.floor(Math.random() * staten.length);
var randomWord = staten[randomWordPicker];

function startgame(){
    document.getElementById("maxlifes").innerHTML = maxlifes;
    for(var i = 0; i <randomWord.length; i++){
        var Keepword = document.getElementById("word");
        KeepLetter = document.createElement('li');
        KeepLetter.setAttribute('class', 'letter');
        KeepLetter.innerHTML += " _";
        guessedLetters[i] = KeepLetter;
        Keepword.appendChild(KeepLetter);
    }

}
startgame();

var alphaButton = document.getElementById("alphabet");

alphaButton.addEventListener("click", returnChosenLetter);

function returnChosenLetter(letter){
    if (letter.target !== letter.currentTarget) {
        checkchosenletter(letter.target.id);
    }
}
function checkchosenletter(letter){
    var j = (randomWord.toLowerCase().indexOf(letter));
    console.log(letter);
    if (j === -1){
        
        maxlifes--;
        document.getElementById("maxlifes").innerHTML = maxlifes;
        checkVerlies(maxlifes);
    }
    else{
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i].toLowerCase() === letter){
                guessedLetters[i].innerHTML = randomWord[i];
                rightguesses += 1;
                document.getElementById("rightguesses").innerHTML = rightguesses;
            }
        }
    }
    totalguesses++;
    document.getElementById("totalguesses").innerHTML = totalguesses;
    checkwinst(rightguesses);

}


function checkwinst(right){
    if(randomWord.length === right){
        if( alert('YOU WON')){
        }
        else{
            window.location.reload();
        }
    }
}


function checkVerlies(lifes) {
    if(lifes < 1){

        if( alert('YOU LOST. THE WORD WAS:' + randomWord) ){

        } else {
            window.location.reload();
        }
    }
}
