## unit-4-game

## Note
    - crystal's randomly generated #s between 1-12.
    - Guess number is randomly generated between 19-120.

## How the Game Works: 
    1. User is given a random # at the start.
    2. There are 4 crystals below. By clicking on a crystal the user will add a specific amount of points to your total score. 
    3. The user wins by matching their score total to the randomized number. The user loses if their total score exceeds the randomized       number. 
    4. The values of each crystal are hidden until the user clicks on it.
    5. A randomized number is generated after each time the user wins or loses.

## Strategy: 
    1. Create HTML with key words:
        a. set up structure and words. 
        b. find crystal images.
    2. Begin jQuery: What needs to happen here?
        a. create a variable the cpu randomized number -->
            - randomized number set using (using math.Floor(math.Random) * range(which here is 19-120)) -->
            - use: function getRandomInt(min, max){
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                } -->
        b. wins & losses variables
            - wins++ if userTotal === cpuNumber
            - losses++ if userTotal > cpuNumber
        c. create variables for each crystal -->
            - each crystal should be assigned a randomized number (using math.Floor(math.Random) * range(which here is 1-12)) -->
            - select HTML class & use .on("click" function()) -->
            - inside callback function, increase userTotal by added the selected varaible to the previous userTotal -->
         
        d. Create Functions to give variables something to do
        e. Create events to run the functions
        f. Print number totals, wins, losses on the browser.            
    
    3. CSS for Visuals: CSS Notes
        a .everything looks floated left 
            - remember to use "clearfix" clear: both
        b. use columns
        c. use padding to increase each box
            - use positioning within the boxes to place numbers
            - absolute positioning(?)
        d. Find colors and patterns with Eye Dropper (Chrome Extension)
