// Student: Jon Gorman
// Class: 211 Java Tue/Thur
// Instructor: Renee Dudley
// Date: 10/04/17
//Revision Date: 10/11/17


//Please let me know what to fix if its not too late. :)
'use strict';



//****create a function that returns the date and time
//variable that displays the day.
//variable that displays the time.
// variable that adds the day and the time.
//return the variable of the added date and time.

const dayAndTime = () => {
    let date = new Date();
    let n = date.toDateString();
    let time = date.toLocaleTimeString();
    return date + '' + time;
};  dayAndTime();

//_____________________________________________________

//****Write a JavaScript program to convert a number to a string.
//create a variable that is a number.
//create a variable that is number.numToString();
//console.log the variable that equals .numToString;
//varify by adding the strings to get a souble string;

const numStr = (peach) => {
   return peach.toString();
}; numStr(444);

// ______________________________________________________

//****Write a JavaScript program to convert a string to the number.
//write a variable that is a string.
//write a variable the turns the string to a number with parseInt().
//console.log the variable that used parseInt.

const strNum = () => {
    return parseInt('777');
};  strNum();

//______________________________________________________

//****Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String
//Use console.log(typeof...) for each one of the operators

const returnType = () => {
    return [typeof true, typeof 0/0, typeof null, typeof a, typeof 27, typeof 's-tring', 7/0, ];
};  returnType();

//________________________________________________________

//****Write a JavaScript program that adds 2 numbers together.
//write a variable that equals a number
//write another variable that equals another number.
//console.log the addition of both variables

const adding = (a, b) =>{
    return a + b
};  adding(7, 7);

// __________________________________________________________

//****Write a JavaScript program that runs only when 2 things are true.
//create a function
//create variable that equals true
//create another variable that equals true
//use an if statement telling program what to console.log('true') if the varaibles are true
//use blank else statement so the function sudo-stops.
//call the function
//

const happiness = (pizza, beer) => {
  if(pizza === 'hot' && beer === 'cold'){
    return true;
  }
};  happiness('hot', 'cold');

//________________________________________________________________

//****Write a JavaScript program that runs when 1 of 2 things are true.
//create a function
//create variable that equals true or false
//create another variable that equals true or false
//use an if statement telling program what to console.log('true') if both of the varaibles are false
//use blank else statement so the function sudo-stops.
//call the function

const kindaHappy = (pizza, beer) => {
  if(pizza === 'hot' || beer === 'cold'){
    return true;
  }
};  kindaHappy('roomTemp', 'cold');

//__________________________________________________________

//Write a JavaScript program that runs when both things are not true
//create a function
//create variable that equals false
//create another variable that equals false
//use an if statement telling program what to console.log('true') if either of the varaibles are true
//use blank else statement so the function sudo-stops.
//call the function

const sadness = (pizza, beer) => {
  if(pizza !== 'hot' && beer !== 'cold'){
    return true;
  }
};  sadness('cold', 'hot');
