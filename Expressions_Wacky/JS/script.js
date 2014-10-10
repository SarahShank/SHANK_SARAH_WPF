/*
 Sarah Shank
 WPF Section 01
 Expressions_Assignment_Personal Week 2
 10-8-2014
 */

//How much saliva do you produce a year?
alert ("Click OK if you are a human.");
//User is human. (Example = 12)
alert ("The average human produces 1.25 liters of saliva per day.")
var saliva = (1.25);
//Telling user how much saliva is produced per day. (Example = 12)
var days = prompt("Please enter how many days are in a week.");
//Asking the user for the amount of days in a week (Example = 7)
var weeks = prompt ("Please enter the amount of weeks in a year.");
//Calculate the information.
var salivaProduced = saliva * days * weeks +" liters";
//printing results on console.log
console.log("Approximately " + salivaProduced + " are produced in your mouth per year.");
//alerting the user about the results.
alert("You produce " +salivaProduced + " of saliva per year!");
//alerting the user.
alert("Gross!")
//alerting the user in js
alert("Please rate the wackiness of this Javascript.")
//expressions with arrays to calculate total.
var wacky = [100, 100, 100];
//calculating array
var total = wacky[0] + wacky[1] + wacky[2];
//total
var total = total/3
//alerting the user about results.
alert(total +"%" + " percent")
//alerting the user about the results.
alert("No! You didn't get a choice!")
//printing results to console.log
console.log("Grade "+ total +"%");


