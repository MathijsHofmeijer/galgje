var staten;
var buttons;
var totalguesses = 0;
var rightguesses = 0;
var maxlifes = 7;
var totalRightLetters = 0;
var chosenLetters;
var guessedLetters = [];

/*staten = ['Alabama','Alaska','Arizona','Arkansas','Californië' ,'Colorado','Connecticut','Delaware','Florida','Georgia','HawaiiIdaho','Illinois',
     'Indiana','Iowa','Kansas','Kentucky', 'Louisiana','Maine','Maryland','Massachusetts', 'Michigan','Minnesota','Mississippi','Missouri','Montana',
     'Nebraska','Nevada' ,'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
     'Rhode Island','South Carolina','South Dakota','Tennessee','texas','Utah','Vermont','Virginia','Washington','Washington DC','West Virginia','Wisconsin','Wyoming']
*/
staten = ['utah'];
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

var Buttonss = document.getElementById("alphabet");

Buttonss.addEventListener("click", returnChosenLetter);

function returnChosenLetter(letter){
    if (letter.target !== letter.currentTarget) {
        checkLetter(letter.target.id);
    }
}

function checkLetter(chosenLetters) {
    var chosenbutton = document.getElementById(chosenLetters);

    if (chosenbutton.classList.contains("active") === false){
        chosenbutton.classList.add("active");
        totalguesses++;
        document.getElementById("totalguesses").innerHTML = totalguesses;

        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i].toLowerCase() === chosenLetters){
                guessedLetters[i].innerHTML = randomWord[i];
                totalRightLetters += 1;
            }
        }
        checkchosenletter(guessedLetters);
    }
    else{
        alert ("kies een andere letter aub");
        return false;
    }
}

function checkchosenletter(letter){
    var j = (randomWord.toLowerCase().indexOf(letter));
    if (j === -1){
        maxlifes --;
        document.getElementById("maxlifes").innerHTML = maxlifes;
        checkVerlies(maxlifes);
    }
    else{
        rightguesses++;
        document.getElementById("rightguesses").innerHTML = rightguesses;

        checkwinst(totalRightLetters);
    }
}

function checkwinst(lettersgoed){
    if(randomWord.length === lettersgoed){
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
