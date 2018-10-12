//Step 1: Initialization Global variables
// declare variable for cpuNumber
var cpuNumber;
// declare a varaible for wins
var wins = 0;
// declare a varaible for losses
var losses = 0;
// declare a variable for the red jewel & set it equal to a random variable btwn 1-12
var red = Math.floor(Math.random() * 12 + 1);
// declare a variable for the blue jewel & set it equal to a random variable btwn 1-12
var blue = Math.floor(Math.random() * 12 + 1);
// declare a variable for the green jewel & set it equal to a random variable btwn 1-12
var green = Math.floor(Math.random() * 12 + 1);
// declare a variable for the yellow jewel & set it equal to a random variable btwn 1-12
var yellow = Math.floor(Math.random() * 12 + 1);
// declare variable containing the user's point total 
var userTotal = 0;

// waits until HTML is loaded to run JS or jQuery code
$(document).ready(function () {
    // Declare a reset variable & call a function
    var reset = function () {
        //Generate a new randomized number and store in cpuNumber
        cpuNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#rand-num").text(cpuNumber);
        red = Math.floor(Math.random() * 12 + 1);;
        blue = Math.floor(Math.random() * 12 + 1);
        green = Math.floor(Math.random() * 12 + 1);
        yellow = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $("#user-score").text(userTotal);

    }
    
    //Set the variable cpuNumber randomized number using Math.floor(Math.random)*/
    cpuNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19
    // Select #rand-num and use .text(cpuNumber) to print cpuNumber to the browser
    $("#rand-num").text(cpuNumber);
    console.log(cpuNumber);

    //Select the ID #wins & print to the browser using .innerHTML(wins)
    $("#wins").html("Wins: " + wins);

    //Select the ID #losses & print to the browser using .innerHTML(losses)
    $("#losses").html("Losses: " + losses);

    //Select ID #user-score and use .text(userScore) to print userScore to the browser.
    $("#user-score").text(userTotal);

        // Let's create a couple If statements here:
    // Wrap the if & else/if in a function & name is checkIf
    var checkIf = function() {
        // Create an IF statement where userTotal === cpuNumber 
        if (userTotal === cpuNumber) {
            // Alert("Congrats, you won!")
            $(alert('Congrats, you won!'));
            // Increment wins by 1 using wins++
            wins++;
            // Select ID #wins & print it to the browser using .text(wins)
            $("#wins").text("Wins:" + wins);
            reset();
        // Create an IF statement where userTotal > cpuNumber 
        } else if (userTotal > cpuNumber) {
            // Alert("Oops! Your total exceeded the number goal.")
            alert("Oops! Your total exceeded the number goal.")
            // Increment losses by 1 using losses++
            losses++;
            // Select ID #wins & print it to the browser using .text(wins)
            $("#losses").text("Loses:" + losses);
            reset();
        }
        
        }    

    //Select .red-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".red-cry").on("click", function () {
        //Select value of var "red" & add it to userTotal (use userTotal += red to increment)
        userTotal += red;
        console.log(userTotal);
        $("#user-score").text(userTotal);
        checkIf();
    });

    //Select .blue-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".blue-cry").on("click", function () {
        //Select value of var "blue" & add it to userTotal (use userTotal += blue to increment)
        userTotal += blue;
        $("#user-score").text(userTotal);
        console.log(userTotal);
        checkIf();
    });

    //Select .green-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".green-cry").on("click", function () {
        //Select value of var "green" & add it to userTotal (use userTotal += green to increment)
        userTotal += green;
        $("#user-score").text(userTotal);
        console.log(userTotal);
        checkIf();
    });

    //Select .yellow-cry class & use .on("click",function()) method to trigger a callback funtion
    $(".yellow-cry").on("click", function () {
        //Select value of var "yellow" & add it to userTotal (use userTotal += yellow to increment)
        userTotal += yellow;
        $("#user-score").text(userTotal);
        console.log(userTotal);
        checkIf();
    });

/*Can't get my if & else if statements to work
    maybe try something with word false?
    does my game reset when if statements are concluded? 
    wins ++
    losses ++
*/






















});