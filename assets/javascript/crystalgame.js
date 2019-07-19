

//var winningNumber = getRandomArbitrary(19,120);
var winningNumber;
var score;
var yellowCrystal ; 
var redCrystal;
var blueCrystal; 
var greenCrystal; 
//this function has to go first
resetGame();

document.getElementById("winningNumber").innerHTML=winningNumber;

function getRandomArbitrary(min,max){
    min= Math.ceil(min);
    max = Math.floor(max +1);
    return Math.floor(Math.random() * (max-min) + min);
}

// var yellowCrystal = getRandomArbitrary(1,12);
// var redCrystal = getRandomArbitrary(1,12);
// var blueCrystal = getRandomArbitrary(1,12);
// var greenCrystal = getRandomArbitrary(1,12);

var losses = 0;
var wins = 0;
//var score = 0;

//document.getElementById("yellowCrystal").addEventListener("click",calculate);

function yellowCrystalClicked(){
    //console.log("yellowCrystal:"+ yellowCrystal);
    score = score + yellowCrystal;
    document.getElementById("score").innerHTML = score;
    if(score == winningNumber){
        wins = wins +1;
        document.getElementById("wins").innerHTML = wins;
        resetGame();
    }
    else if(score > winningNumber){
        losses = losses + 1;
        document.getElementById("losses").innerHTML =losses;
        resetGame();
    }
}
 

//document.getElementById("redCrystal").addEventListener("click",calculate);
function redCrystalClicked(){
    score = score + redCrystal;
    document.getElementById("score").innerHTML = score;
    if(score == winningNumber){
        wins = wins +1;
        document.getElementById("wins").innerHTML = wins;
        resetGame();
    }
    else if(score > winningNumber){
        losses = losses + 1;
        document.getElementById("losses").innerHTML =losses;
        resetGame();
    }
}

//document.getElementById("blueCrystal").addEventListener("click",calculate);
function blueCrystalClicked(){
    score = score + blueCrystal;
    document.getElementById("score").innerHTML = score;
    if(score == winningNumber){
        wins = wins +1;
        document.getElementById("wins").innerHTML = wins;
        resetGame();
    }
    else if(score > winningNumber){
        losses = losses + 1;
        document.getElementById("losses").innerHTML =losses;
        resetGame();
    }
}

//document.getElementById("greenCrystal").addEventListener("click",calculate);
function greenCrystalClicked(){
    score = score + greenCrystal;
    document.getElementById("score").innerHTML = score;
    if(score == winningNumber){
        wins = wins +1;
        document.getElementById("wins").innerHTML = wins;
        resetGame();
    }
    else if(score > winningNumber){
        losses = losses + 1;
        document.getElementById("losses").innerHTML =losses;
        resetGame();
    }
}

function resetGame(){
    winningNumber = getRandomArbitrary(19,120); 
    score = 0; 
    yellowCrystal = getRandomArbitrary(1,12);
    redCrystal = getRandomArbitrary(1,12);
    blueCrystal = getRandomArbitrary(1,12);
    greenCrystal = getRandomArbitrary(1,12);
    document.getElementById("winningNumber").innerHTML=winningNumber;
    document.getElementById("score").innerHTML=score;
}

