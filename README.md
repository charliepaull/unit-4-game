## unit-4-game
crystal counter hw for week 4. jQuery used. 

**Note**
    crystal's randomly generated #s between 1-12.
    Guess number is randomly generated between 19-120.

How the Game Works: 
    1. User is given a random # at the start.
    2. There are 4 crystals below. By clicking on a crystal the user will add a specific amount of points to your total score. 
    3. The user wins by matching their score total to the randomized number. The user loses if their total score exceeds the randomized number. 
    4. The values of each crystal are hidden until the user clicks on it.
    5. A randomized number is generated after each time the user wins or loses.

Strategy: 
    <!-- 1. Create HTML with key words:
        a. set up structure and words. 
        b. find crystal images. -->
    2. Begin jQuery
        What needs to happen here?
            <!-- a. create a variable the cpu randomized number -->
                <!-- i. randomized number set using (using math.Floor(math.Random) * range(which here is 19-120)) -->
                <!-- ii. use: function getRandomInt(min, max){
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                } -->
            b. wins & losses variables
                i. wins++ if userTotal === cpuNumber
                ii. losses++ if userTotal > cpuNumber
            c. create variables for each crystal
                i. each crystal should be assigned a randomized number (using math.Floor(math.Random) * range(which here is 1-12))
                ii. use button element with selection for each crystal, then use class?
                    *. $(":button") 
            d. create variable for userTotal
                i. userTotal++ WHEN crystals are clicked
                    *. Event triggered     
        Create Functions to give variables something to do
        Create events to run the functions
        Print number totals, wins, losses on the browser.            
    
    3. CSS for Visuals
        CSS Notes:
            1. everything looks floated left 
                a. remember to use "clearfix" clear: both
            2. use columns
            3. use padding to increase each box
                a. use positioning within the boxes to place numbers
                b. absolute positioning(?)
        Find colors and patterns with Eye Dropper (Chrome Extension)