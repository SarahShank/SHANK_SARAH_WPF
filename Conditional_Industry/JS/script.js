/**
 * Created by SarahShank on 10/15/14.
 */
/*
 Sarah Shank
 WPF WDD144-O Section 01
Conditional_Assignment_Industry Week 3
 10-15-2014
 */
//prompting for name
var name = prompt("Please enter your name");
//prints name console.log
console.log(name);
//validating the prompt to see if empty
if(name === ""){//asking to reprompt the user for name if left blank
    name = prompt("Please enter your name, Do not leave blank");
}
//created an array
var dinnerChoices = ["Mexican", "Italian", "Oriental", "Indian"];
//console.log array
console.log(dinnerChoices);
//check how many items are in the array
console.log(dinnerChoices.length);
