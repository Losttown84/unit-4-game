var random_result;
var loss = 0;
var win = 0;
var previousNumber = 0;




var resetAndStart = function() {

    $(".crystals").empty();

    var images = ["assets/images/blue crystal.png", 
                  "assets/images/green crystal.png",
                  "assets/images/white crystal.jpg", 
                  "assets/images/yellowcrystal.jpg"];

    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result:' + random_result);

    for(var i = 0; i<4; i++){

        var random = Math.floor(Math.random() * 11) +1;

        var crystal = $("<div>").append(images);
            crystal.attr({
                "class": 'crystal',
                "data-random":random
                });
                crystal.css({
                    "background-image":"local(" + images[1] + ")",
                    "background-size":"cover"
                });
        $(".crystals").append(crystal);

    }

    $("#total").html("Total Score: " + previousNumber);
}

resetAndStart();

$(document).on('click', ".crystal", function (){
    
    var num = parseInt($(this).attr('data-random'));
    
    previousNumber += num;
    console.log(previousNumber);
    $("#total").html("Total Score: " + previousNumber);

    if(previousNumber > random_result){
        lost++;

        $("#lost").html("Lost: ", lost);

        previousNumber = 0;

        resetAndStart();
    }
    else if (previousNumber === random_result){
        win++;

        $("#win").html("Won", win);

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
