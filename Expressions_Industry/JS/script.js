/*
 Sarah Shank
 WPF Section 01
 Expressions_Assignment_Personal Week 2
 10-8-2014
 */
//Calculating the users download speed
//Speaking to the user using an alert
var speakingUser;
speakingUser = ("Hello User \nLet's Calculate Your Download Speed");
alert (speakingUser);
//Asking the user to enter file size.
var fileSize = prompt("Please enter the size of your file");
//Asking the user to enter internet speed.
var internetSpeed = prompt("Please enter your internet speed");
//Asking the user to enter battery percentage.
var batteryCharge = prompt("Please enter your battery percentage");
//Calculating the information
var downLoadSpeed = fileSize / internetSpeed;
var downLoadSpeed = downLoadSpeed + +batteryCharge;
//console.log (downLoadSpeed); prints to the console.
console.log(downLoadSpeed + " Mega bytes per second. \n Approximate download speed.");
//Printing increments to console.log
var example = "Increment Examples Below";
console.log(example);
//Concatenating strings
var size1 = "File Size ";
var size2 = "160 bytes";
//Printing increments to console.log
var result = size1 + size2
console.log(result);
//Concatenating strings
var  speed1 = "Internet Speed ";
var  speed2 = "10 MB";
//Printing increments to console.log
var result = speed1 + speed2
console.log(result);
//Concatenating strings
var charge1 = "Battery Charge ";
var charge2 = "45%";
//Printing increments to console.log
var result = charge1 + charge2
console.log(result);
