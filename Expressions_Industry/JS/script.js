/*
 Sarah Shank
 WPF Section 01
 Expressions_Assignment_Personal Week 2
 10-8-2014
 */

//Downloading files
//Asking the user to enter file size.
var fileSize = prompt("Please enter your file size");
//Asking the user to enter internet speed.
var internetSpeed = prompt("Please enter your internet speed");
var batteryCharge = prompt("Please enter your battery percentage");


var downLoadSpeed = fileSize / internetSpeed;
var downLoadSpeed = downLoadSpeed + +batteryCharge;
console.log(downLoadSpeed + " Approximate download speed.");

var example = "Increment Examples Below";
console.log(example);

var size1 = "File Size ";
var size2 = "160 bytes";

var result = size1 + size2
console.log(result);

var  speed1 = "Internet Speed ";
var  speed2 = "10 MB";

var result = speed1 + speed2
console.log(result);

var charge1 = "Battery Charge ";
var charge2 = "45%";

var result = charge1 + charge2
console.log(result);
