var random_result;
var loss = 0;
var win = 0;
var previousNumber = 0;
var images = "blue crystal.png, green crystal.png, white crystal.jpg, yellowcrystal.jpg";

for(var i = 0; i<4; i++){

    var crystal = $("<div>");
        crystal.attr("class", 'crystal');

    $(".crystals").append(crystal);
    console.log("Hello World!");

}



//Start with Computer Generated random number from between 19-120.
//Need to create 4 crystals that each contains a random number from 1-12
//The number generates for every single new game (Win or Loss) for each crystal
//When any crystal is clicked it should add to the previous crystal that was clicked
//The total of the amount of crystals needs to equal the Computer Generated random number for a Win, added to a counter
//If the total of the amount of crystals goes over the Computer Generated random number, user gets a Loss, added to a counter
//When Win or Loss is determined, game restarts with a new Computer Generated number
