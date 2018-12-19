//console.log("Hello World");

//Start with Computer Generated random number from between 19-120.
//Need to create 4 crystals that each contains a random number from 1-12
//The number generates for every single new game (Win or Loss) for each crystal
//When any crystal is clicked it should add to the previous crystal that was clicked
//The total of the amount of crystals needs to equal the Computer Generated random number for a Win, added to a counter
//If the total of the amount of crystals goes over the Computer Generated random number, user gets a Loss, added to a counter
//When Win or Loss is determined, game restarts with a new Computer Generated number

var random;
var loss;
var win;
var previousNumber = 0;
//var firstCrystal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; is there a way to get these vars to add together when chosen to equal the Computer's number?
//var secondCrystal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//var thirdCrystal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//var fourthCrystal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//below is the match needed for the Computer Generated random number
randomResult = Math.floor(Math.random() * 19 ) + 101;
//printing it to the screen
$("#computersnumber").html("Computer's Number:" + randomResult);


//the below creates 4 divs to hold our crystals and assigns it a css class
for(var i = 0; i< 4; i++){

    var randomCrystal = Math.floor(Math.random() * 11) +1; //assigning each crystal a random number between 1 and 12
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomCrystal
        });

    $(".crystals").append(crystal);
}
//clicking a crystal will log a number, but I cannot get it to add together
$(".crystal").on("click", function (){

    var num = parseInt($(this).attr("data-random"));

    previousNumber += num;
        console.log(previousNumber);
    if(previousNumber > randomResult){
        console.log("You lost!");
    }
    else if(previousNumber === randomResult){
        console.log("Win!");
    }
});

