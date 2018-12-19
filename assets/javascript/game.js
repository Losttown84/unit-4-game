var random;
var loss = 0;
var win = 0;
var previousNumber = 0;

var startReset = function (){

    $(".crystal").empty();

    randomResult = Math.floor(Math.random() *  120) +19;

    $("#computersnumber").html("Computer's Number:" + randomResult);

    for(var i = 0; i< 4; i++){

        var randomCrystal = Math.floor(Math.random() * 11) +1; //assigning each crystal a random number between 1 and 12

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": randomCrystal
            });

    $(".crystals").append(crystal);
    }
}

startReset(0);

var reset = function (){

}

//below is the match needed for the Computer Generated random number
randomResult = Math.floor(Math.random() *  120) +19;
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
//clicking a crystal will log a number
$(".crystal").on("click", function (){

    var num = parseInt($(this).attr("data-random"));

    previousNumber += num;
        console.log(previousNumber);
    if(previousNumber === randomResult){
        win++;;

        $("#win").append(win);

        previous = 0;

        startReset();
    }
    else if(previousNumber > randomResult){

        lost--;

        $("#lost").html(lost);

        previous = 0;

        startReset();
    }
});




//Start with Computer Generated random number from between 19-120.
//Need to create 4 crystals that each contains a random number from 1-12
//The number generates for every single new game (Win or Loss) for each crystal
//When any crystal is clicked it should add to the previous crystal that was clicked
//The total of the amount of crystals needs to equal the Computer Generated random number for a Win, added to a counter
//If the total of the amount of crystals goes over the Computer Generated random number, user gets a Loss, added to a counter
//When Win or Loss is determined, game restarts with a new Computer Generated number
