
var reandom_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();
    var images = [
        'assets/images/3m06s7fy_400x400.jpg',
        'assets/images/diamond_2860618.jpg',
        'assets/images/gemmed-clipart-minecraft-emerald-1.jpg',
        'assets/images/item.png'
    ];

    random_result = (Math.random() * 99) - 30;

    $("#result").html('random_result:' + random_result);
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("div>")
        cfystal.attr({
            "class": 'crystal',
            "data-random": random
        })
        $(".crystals").append(crystal);
    }

    $("#previous").html("totalScore: " + previous);
}

resetAndStart();

$("crystal").on('click', function () {
    var num = parseInt($(this).attr('data-random'));
    previous = + num;

    $("#previous").html("totalScore: " + previous);

    if(previous > random_result){
        lost++;
        $("#lost").html("You Lose: " + lost);
        previous = 0;
        resetAndStart();
    }
    else if(previous === reandom_result){
        win ++;
        $("#win").html("You Win: " + win);
        previous = 0;
        resetAndStart();
    }
});


   // create vars for images
    //every crystal has a ran num 
    //new ran num should be genrate every time we win or lose
    //when clicking any crystal it should add with the last click
    //until it hits the total score
    //if it is not equal,we lose and decrement alost
    //if greater than random result \, we decrement a last counter
    //if it is equal, then we increment a win counter
    //