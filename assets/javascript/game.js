var random_result;
var loss = 0;
var win = 0;
var previousNumber = 0;
var images = "blue crystal.png, green crystal.png, white crystal.jpg, yellowcrystal.jpg";



var resetAndStart = function() {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result:' + random_result);

    for(var i = 0; i<4; i++){

        var random = Math.floor(Math.random() * 11) +1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random":random
                });

        $(".crystals").append(crystal);

    }
}

resetAndStart();

$(document).on('click', ".crystal", function (){
    
    var num = parseInt($(this).attr('data-random'));
    
    previousNumber += num;
    console.log(previousNumber);
    if(previousNumber > random_result){
        lost++;

        $("#lost").html(lost);

        previousNumber = 0;

        resetAndStart();
    }
    else if (previousNumber === random_result){
        win++;

        $("#win").html(win);

        previousNumber = 0;

        resetAndStart();
    }

});

//Start with Computer Generated random number from between 19-120.
//Need to create 4 crystals that each contains a random number from 1-12
//The number generates for every single new game (Win or Loss) for each crystal
//When any crystal is clicked it should add to the previous crystal that was clicked
//The total of the amount of crystals needs to equal the Computer Generated random number for a Win, added to a counter
//If the total of the amount of crystals goes over the Computer Generated random number, user gets a Loss, added to a counter
//When Win or Loss is determined, game restarts with a new Computer Generated number
