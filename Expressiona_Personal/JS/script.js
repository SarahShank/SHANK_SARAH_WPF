/*
Sarah Shank
WPF Section 01
Expressions_Assignment_Personal Week 2
10-8-2014
*/

//How much tile will I need for my room?
alert ("We are calculating the total amount of tile needed for your room");
//Asking their user for room width. (Example = 12)
var roomWidth = prompt ("Please enter the width of your room in ft.");
//Asking the user for their room length. (Example = 12)
var roomLength = prompt ("Please enter the length of your room ft.");
//Asking the user for the size of your tile in sq. ft. (Example = 1.77)
//Giving the user tile options already in the form of square feet
alert("Tile choices listed in square feet: 1, 1.77, 2.25");
var tileSize = prompt ("Please enter the size of the tile in square feet");
//Calculate the information.
var tilesNeeded = roomWidth * roomLength / tileSize;
//console.log (tilesNeeded); prints to the console.
console.log("Approximately " + tilesNeeded + " tiles are needed.");
//Alerts the user with the (result) of approximate tiles needed.
var result = "The total tiles needed for your room is approximately  " + tilesNeeded;
alert(result);
//arrays
var worksForAnyRoom = ["Bedroom", "Bathroom", "Kitchen", "Den", "Living room"];
console.log(worksForAnyRoom[3]);