//Step 1: Initialization Global variables
// declare variable for cpuNumber
var cpuNumber;
// declare a varaible for wins
var wins = 0;
// declare a varaible for losses
var losses = 0;
// declare a variable for the red jewel & set it equal to a random variable btwn 1-12
var red = Math.floor(Math.random() * 11 + 1);
// declare a variable for the blue jewel & set it equal to a random variable btwn 1-12
var blue = Math.floor(Math.random() * 11 + 1);
// declare a variable for the green jewel & set it equal to a random variable btwn 1-12
var green = Math.floor(Math.random() * 11 + 1);
// declare a variable for the yellow jewel & set it equal to a random variable btwn 1-12
var yellow = Math.floor(Math.random() * 11 + 1);
// declare variable containing the user's point total 
var userTotal = 0;

// waits until HTML is loaded until JS or jQuery runs
$(document).ready(function () {
    /* Call the ID #rand-num cpuNumber & set the variable = a 
    randomized number using math.Floor(math.random)*/
    cpuNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19
    $("#rand-num").text(cpuNumber);
    console.log(cpuNumber);

    //Select .red-cry class & use the .click(function) method to trigger a callback funtion
    $(".red-cry").on("click", function () {
        //Select value of var "red" & add it to userTotal (use userTotal = red + userTotal to increment)
        userTotal = red + userTotal;
        console.log(userTotal);
    });

    //Select .blue-cry class & use the .click(function) method to trigger a callback funtion
    $(".blue-cry").on("click", function () {
        //Select value of var "blue" & add it to userTotal (use userTotal = red + userTotal to increment)
        userTotal = blue + userTotal;
        console.log(userTotal);
    });

    //Select .green-cry class & use the .click(function) method to trigger a callback funtion
    $(".green-cry").on("click", function () {
        //Select value of var "green" & add it to userTotal (use userTotal = red + userTotal to increment)
        userTotal = green + userTotal;
        console.log(userTotal);
    });

    //Select .yellow-cry class & use the .click(function) method to trigger a callback funtion
    $(".yellow-cry").on("click", function () {
        //Select value of var "yellow" & add it to userTotal (use userTotal = red + userTotal to increment)
        userTotal = yellow + userTotal;
        console.log(userTotal);
    });


























})