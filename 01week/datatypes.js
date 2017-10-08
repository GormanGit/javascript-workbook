// Student: Jon Gorman
// Class: 211 Java Tue/Thur
// Instructor: Renee Dudley
// Date: 10/04/17
//


'use strict';



//****create a function that returns the date and time
//variable that displays the day.
//variable that displays the time.
// variable that adds the day and the time.
//return the variable of the added date and time.


function dayAndTime(){
  var date = new Date();
  var n  = date.toDateString();
  var time = date.toLocaleTimeString();
  return date + ' ' + n + time;

} dayAndTime();

//_____________________________________________________

//****Write a JavaScript program to convert a number to a string.
//create a variable that is a number.
//create a variable that is number.numToString();
//console.log the variable that equals .numToString;
//varify by adding the strings to get a souble string;

function numStr(){
    var number = 27;
    var a = number.toString();
  return a + a
}
numStr();

// //______________________________________________________

//****Write a JavaScript program to convert a string to the number.
//write a variable that is a string.
//write a variable the turns the string to a number with parseInt().
//console.log the variable that used parseInt.

function strNum(){
    var str = "27";
    var a = parseInt(str);
    return a + a
}
strNum();
//______________________________________________________

//****Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String
//Use console.log(typeof...) for each one of the operators

function typOf(){
    var a = true;
    var b = null;
    var c = 7/0;
    var d = 27;
    var e = Math.sqrt(-1);
    var f = "Im having Fun";
    return [typeof a, b, c, d, e, typeof f]
};
typOf();
//________________________________________________________

//****Write a JavaScript program that adds 2 numbers together.
//write a variable that equals a number
//write another variable that equals another number.
//console.log the addition of both variables

// function adding() {
//     var a = 7;
//     var b = 7;
//     return a + b
// } adding();

const adding = (a, b) =>{
    // a = 7;
    // b = 7;
    return a + b
}
adding(7, 7);
// __________________________________________________________

//****Write a JavaScript program that runs only when 2 things are true.
//create a function
//create variable that equals true
//create another variable that equals true
//use an if statement telling program what to console.log('true') if the varaibles are true
//use blank else statement so the function sudo-stops.
//call the function
//

var happiness = function(){
    var pizza = true;
    var beer = true;
    if(pizza && beer === true){
        console.log('True');
    }
    else {


    }
};
happiness();
//________________________________________________________________

//****Write a JavaScript program that runs when 1 of 2 things are true.
//create a function
//create variable that equals true or false
//create another variable that equals true or false
//use an if statement telling program what to console.log('true') if both of the varaibles are false
//use blank else statement so the function sudo-stops.
//call the function


function kindaHappiness(){
    var pizza = false;
    var beer = true;
    if(pizza || beer === true){
        console.log('True');

    }
    else {


    }
};
kindaHappiness();
//__________________________________________________________

//Write a JavaScript program that runs when both things are not true
//create a function
//create variable that equals false
//create another variable that equals false
//use an if statement telling program what to console.log('true') if either of the varaibles are true
//use blank else statement so the function sudo-stops.
//call the function



function epicSadness(){
    var pizza = 1;
    var beer = 1;
    if(pizza && beer !== true){
        console.log('False');

    }
    else {

//console.log("False");
    }
};
epicSadness();
