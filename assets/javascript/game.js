//Step 1: Initialization Global variables
// declare variable for cpuNumber
var cpuNumber;
// declare a varaible for wins
var wins = 0;
// declare a varaible for losses
var losses = 0;
// declare variable containing the user's point total 
var userTotal = 0;
// declare red jewel variable
var red;
// declare blue jewel variable
var blue;
// declare green jewel variable
var green;
// declare yellow jewel variable
var yellow;

function reset() {
    //Set cpuNumber to a randomized number using Math.floor(Math.random)
    cpuNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //set red equal to a random variable btwn 1-12
    red = Math.floor(Math.random() * 12 + 1);;
    //set blue equal to a random variable btwn 1-12
    blue = Math.floor(Math.random() * 12 + 1);
    //set green equal to a random variable btwn 1-12
    green = Math.floor(Math.random() * 12 + 1);
    //set yellow equal to a random variable btwn 1-12
    yellow = Math.floor(Math.random() * 12 + 1);
    //reset userTotal value back to zero
    userTotal = 0;
    // Select #rand-num and use .text(cpuNumber) to print cpuNumber to the browser
    $("#rand-num").text(cpuNumber);
    //Select ID #user-score and use .text(userTotal) to print userScore to the browser.    
    $("#user-score").text(userTotal);
    //Select the ID #wins & use .text(wins) to print userTotal to the browser.
    $("#wins").text("Wins: " + wins);
    //Select the ID #losses & use .text(losses) to print userTotal to the browser.
    $("#losses").text("Losses: " + losses);    

}

// Let's create a couple If statements here:
// Wrap the if & else/if in a function & name is checkIf
function score(crystalValue) {
    //add crystal values to userTotal to increment after crystal is clicked
    userTotal += crystalValue;
    //Select ID #user-score and use .text(userTotal) to print userScore to the browser.
    $("#user-score").text(userTotal);
    // Create an IF statement where userTotal === cpuNumber 
    if (userTotal === cpuNumber) {
        // Alert("Congrats, you won!")
        $(alert("Congrats, you won!"));
        // Increment wins by 1 using wins++
        wins++;
        // reset the game
        reset();
        // Create an else/if statement where userTotal > cpuNumber 
    } else if (userTotal > cpuNumber) {
        // Alert("Oops! Your total exceeded the number goal.")
        alert("Oops! Your total exceeded the number goal.")
        // Increment losses by 1 using losses++
        losses++;
        // reset the game
        reset();
    }

}    

reset();

// waits until HTML is loaded to run JS or jQuery code
$(document).ready(function () {  
    // console.log(cpuNumber);

    //Select .red-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".red-cry").on("click", function () {
        //Select value of var "red" & add it to userTotal (use userTotal += red to increment)
        score(red);
        console.log(userTotal);
    });

    //Select .blue-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".blue-cry").on("click", function () {
        //Select value of var "blue" & add it to userTotal (use userTotal += blue to increment)
        score(blue);
        console.log(userTotal);
    });

    //Select .green-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".green-cry").on("click", function () {
        //Select value of var "green" & add it to userTotal (use userTotal += green to increment)
        score(green);
        console.log(userTotal);
    });

    //Select .yellow-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".yellow-cry").on("click", function () {
        //Select value of var "yellow" & add it to userTotal (use userTotal += yellow to increment)
        score(yellow);
        console.log(userTotal);
    });

});