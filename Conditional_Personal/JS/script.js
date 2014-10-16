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
}
console.log(name);
//created an array
var dinnerChoices = ["Mexican", "Italian", "Oriental"];
//console.log array
console.log(dinnerChoices);
//check how many items are in the array
console.log(dinnerChoices.length );

var dinnerChoices = prompt("Are we having Mexican Italian or Oriental for dinner?")

var dinPlate = [0]
if(dinnerChoices[0] === "Mexican"){

    dinPlate++;
}


else{
    console.log("Not feeling mexican");
}

if(dinnerChoices[1] === "Italian"){

    dinPlate++;

}else{
    console.log("Not feeling italian");
}

if(dinnerChoices[2] === "Oriental"){

    dinPlate++;

}else{
    console.log("Not feeling Oriental");
}

console.log(name + " would like " + dinnerChoices + " for dinner.");
alert(name + " would like " + dinnerChoices + " for dinner.");