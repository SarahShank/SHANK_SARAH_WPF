/**
 * Created by SarahShank on 10/15/14.
 */
/*
 Sarah Shank
 WPF WDD144-O Section 01
Conditional_Assignment_Personal Week 3
 10-15-2014
 */
//prompting for name
var name = prompt("Please enter your name");
//prints name console.log
console.log(name);
//validating the prompt to see if empty
if(name === "")
{//asking to re prompt the user for name if left blank
    name = prompt("Please enter your name, Do not leave blank");
}//printing to console.log
console.log(name);
//created an array
var dinnerChoices = ["Mexican", "Italian", "Oriental"];
//console.log array
console.log(dinnerChoices);
//check how many items are in the array
console.log(dinnerChoices.length );
//prompting user for dinner choice
var dinnerChoices = prompt("Are we having Mexican Italian or Oriental for dinner?")
//variable
var dinPlate = [0]
//if user choose mexican
if(dinnerChoices[0] === "Mexican"){
//add one
    dinPlate++;
}
//if else not feeling mexican
else
{
    //printing to console.log
    console.log("Not feeling mexican");
}
//if user choose italian
if(dinnerChoices[1] === "Italian"){
//add one
    dinPlate++;
//if else not feeling italian
}else
{//printing to console.log
    console.log("Not feeling italian");
}
//if user choose oriental
if(dinnerChoices[2] === "Oriental"){
//add one
    dinPlate++;
//if else user does not want oriental
}else
{//printing to console.log
    console.log("Not feeling Oriental");
}//printing to console.log
console.log(name + " would like " + dinnerChoices + " for dinner.");
//alerting user of their final choice
alert(name + " would like " + dinnerChoices + " for dinner.");