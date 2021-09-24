// JAVASCRIPT LOGIC FOR THE STOPWATCH

//NOTES ON VARIABLES:
// Variables are declared usually by “var” (sometimes by let and const)
// Variables contain data.
// I heard from josh that 
// set variable names (identifiers) must be unique and can be anything you want 
// like pink purple poka dotted dinosaur.    
// The general rules for constructing names for variables (unique identifiers) are:
// •	Names can contain letters, digits, underscores, and dollar signs.
// •	Names must begin with a letter
// •	Names can also begin with $ and _
// •	Names are case sensitive (y and Y are different variables)
// •	Reserved words (like JavaScript keywords) cannot be used as names
// JS has similar data types just like solidity did (numbers, strings, objects, Booleans) 

//NOTES ON FUNCTIONS:
// Functions are executed when something invokes it. The () operator is what invokes the 
// function. "Function" key word, a name, and parantheses "()" is the syntax of functions and 
// function names can be anything letters, digits, dollar signs, ect. which are the same rules 
// as variables. Function parameters are inside the "()" and "arguments" are the values recieved 
// by the function. The actual code to be executed by the function is inside "{}".
// The code inside the function will execute when "something" invokes the function.
// Something can invoke the function when:
    // When an event occurs (when a user clicks a button)
    // When it is invoked (called) from JavaScript code
    // Automatically (self invoked)
// Inside the function, the arguments (which are also the parameters) behave like local variables.
// after declaring a variable, the variable is empty and has no value. To assign a value
// use the equal sign. 

//NOTES ON CONDITIONAL STATEMENTS:
// Conditional statements perform actions for different devisions. Here are the 4 different examples:
    // Use "if" to specify a block of code to be executed, if a specified condition is true
    // Use "else" to specify a block of code to be executed, if the same condition is false
    // Use "else if" to specify a new condition to test, if the first condition is false
    // Use "switch" to specify many alternative blocks of code to be executed
// The syntax requires lower case letters or else it will not work.

//NOTES ON OPERATORS:
// Operators are used to assign values, compare values, perform arithmetic, and others. 
// "Comparason operators" are used in logical statements (like if statements) to determine
// equality or difference between variables or values. Examples of comparason operators are:
    // "==" which means equal to.
    // "===" which means equal value and equal type
    // "> or <" which is greater or less than
// If x = 5, then x == 8 returns false and x == 5 returns true.
// If x = 5, then x ==="5" returns false and x === 5 returns true.
// These "Arithmetic operators" preform arithmetic on "literal" numbers or variables:
    // +	Addition
    // -	Subtraction
    // *	Multiplication
    // **	Exponentiation (ES2016)
    // /	Division
    // %	Modulus (Division Remainder)
    // ++	Increment
    // --	Decrement
// Increment means to increase it by +1 at a certain event and decrementing
// means the exact opposite. In otherwords, the increment and decrement operators 
// will add one (+1) or subtract one (-1), respectively, to their 
// operand (which is the term used to decribe the number inside the arithmetic operation) 
// then return a value.
// When using the "++" increment operator it can go before or after the variable. 
// Location matters in how it's evaluated and the result will be different:
    // var++ = postfix increment operator
    // ++var = prefix increment operator
// Postfix means the value will be returned before the operand is changed.  
// Think of it as incrementing for the NEXT use. Example is in a loop:  
    // let x=0; 
    // x<4; 
    // x++) 
// On the second to last iteration, x = 3 and the loop runs.  
// On the last iteration, x=4 and the evaluation stops the loop.
// Prefix means to be USED NOW. Change it immediately. Computer: Now evaluate the value.
    
//NOTES ON JS HTML METHODS:
// GetElementById is a common JS html method that is meant to alter or change 
// the hmtl content on a page. GetElementByID will find an html 
// element with the id of “__” and will alter or change the element’s html content
// to what is assigned to "innerHTML".

//NOTES ON JS TIMING EVENTS:
// The “setInterval()” method is a “JS Timing Event” which is executed in time intervals. 
// This “setInterval” method executes continuously and repeats the function at every 
// given time-interval (which is in milliseconds).
// The execution will stop after using “clearInterval()”. The syntax is 
// "setInterval(function, milliseconds, param1, param2, ...)"

//NOTES ON RETURN STATEMENTS:
// The return statement stops the execution of a function and returns a value from 
// that function.



/* ASSIGNING 0 TO BE THE VALUE OF "STARTSTOP" */
var x;
var startstop = 0;

/* TOGGLE START STOP */
// the "onclick" inside of the html button element is what invokes the "startStop" function
// when button is pressed.
function startStop() {

// How do the number values work & what was the reason for "startstop = startstop + 1"?
// Startstop was initially set to 0. Key here is to visualize the data at each step 
// therefore, as soon as startstop() is called, the value of startstop is incremented by 1.
// The conditional statements check the value of startstop. If it is 1, meaning it's the
// first time it has been invoked (aka button pressed), then the first condition is invoked.
// The timer starts and you will notice the button's "start" html will change to "stop."
// If startstop is called again (aka button is pressed again) the number is "incremented"
// by one more. Don't forget "var startstop = 0" is OUTSIDE the
// functiion, ergo, it's value (which would be 1 already) will remain while startstop
// exists. As seen in "else if" the button html gets changed & startstop then gets reset to
// 0 right before the stop()function gets called. Therefore, there are 3 possible values
// for startstop: 0, 1, and 2. 
    startstop = startstop + 1;

// The conditional if statement will trigger if it's contents are true which will also invoke 
// the "start()" function which is the next function below this function. 
    if (startstop === 1) {
        start();
// Next, GetElementById is a common JS html method that is meant to alter or change 
// the hmtl content on a page. GetElementByID, in this case, will find an html 
// element with the id of “start” and will alter or change the element’s html content
// to what is assigned to "innerHTML" which is "Stop" in this case.
        document.getElementById("start").innerHTML = "Stop";
    }
// As seen in the conditional statment notes, use "else if" to specify a new condition to 
// test, if the first condition is false. That said, the "else if" will trigger another
// innerhtml switch to toggle the button to say "start" this time.
    else if (startstop === 2) {
        document.getElementById("start").innerHTML = "Start";
        startstop = 0;
// The "stop()" function seen further down will also be invoked.
        stop();
    }
}

/* START */
// Invoked from the if statement above, this function contains a setInterval method
// that also invokes the "timer" function (as seen further below) continuously after
// every 10th of a millisecond occurs until we get clearInterval() from the stop function.
// as seen further down. 
function start() {
    x = setInterval(timer, 10);
}

/* STOP */
// setInterval method will invoke the "timer" function (as seen further below) continuously 
// until we get clearInterval() from this stop function.
function stop() {
    clearInterval(x);
}

/* HOLD INCREMENTING VALUE */
var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;

/* CONTAINS AND OUTPUTS RETURNED VALUE OF FUNCTION CHECKTIME */
var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* MAIN TIMER */
// This function gets invoked by the start function inside the setInterval method above.
function timer() {

// Regarding the part with these global variables:
// The code is pulling out the millisec, sec, min, and hour out of the current time.
// Check time takes the value, checks if it's less than 10, and adds that value to 0 
// and returns it. That said the 1st "if" statement, invokes every 10th of a milisecond.  
// It’s because it’s checking if the milliseconds are less than 10 and if so, prepend a “0”.
// This makes 8 milisecs display as 08 instead of 8, and etc.
    miliSecOut = checkTime(milisec);
    secOut = checkTime(sec);
    minOut = checkTime(min);
    hourOut = checkTime(hour);

// Regarding the parts with the "++" operators, such as: "milisec = ++milisec;"
// as the arithmetic operator notes say above, the ++ can go before or after the variable.  
// In this case, it is before.
    milisec = ++milisec;

// The if statements do make sense: 
    // 10 * 100 = 1000 miliseconds = 1 second
    // 60 seconds = 1 minute
    // 60 minutes = 1 hour
// These "if" statements cause timers to count up while it resets the previous timers to 0.
// So what this means is you start the timer and see 00:00:00:ms with the MS counting up.
    if (milisec == 100) {
        milisec = 0;
        sec = ++sec;
    }
    if (sec == 60) {
        min = ++min;
        sec = 0;
    }
    if (min == 60) {
        min = 0;
        hour = ++hour;
    }
   
// This part simply renders the outputs on the html and is visable to the user.
    document.getElementById("milisec").innerHTML = miliSecOut;
    document.getElementById("sec").innerHTML = secOut;
    document.getElementById("min").innerHTML = minOut;
    document.getElementById("hour").innerHTML = hourOut;
}

/* ADDS 0 WHEN VALUE IS <10 */
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/*RESET*/
// This one is simple. the reset function is invoked by the onclick of the reset
// button which in turn changes all the innerhtmls to "00"
function reset() {

    milisec = 0;
    sec = 0;
    min = 0
    hour = 0;

    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";

}