//Step 1: Initialization Global variables
// declare variable for cpuNumber
var cpuNumber;
// declare a varaible for wins
var wins = 0;
// declare a varaible for losses
var losses = 0;
// declare a variable for the red jewel
var red;
// declare a variable for the blue jewel
var blue;
// declare a variable for the green jewel
var green;
// declare a variable for the yellow jewel
var yellow;
// declare variable containing the user's point total
var userTotal;

// waits until HTML is loaded until JS or jQuery runs
$(document).ready (function() {
/* Call the ID #rand-num cpuNumber & set the variable = a 
randomized number using math.Floor(math.random)*/
    $("#rand-num").text(
        cpuNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19
    );
    console.log(cpuNumber);

/*Select #red ID & set variable red equal to a 
random # btwn 1-12*/
    $("#red")
})