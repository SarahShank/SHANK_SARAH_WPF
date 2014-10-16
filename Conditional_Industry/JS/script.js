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
console.log(name);
//created an array
var dinnerChoices = ["Mexican", "Italian", "Oriental", "Indian"];
//console.log array
console.log(dinnerChoices);
//check how many items are in the array
console.log(dinnerChoices.length);

var iWantToEat = 0;

if (dinnerChoices [0] === "Mexican"){

    iWantToEat ++;

}else{

    console.log("Not feeling mexican");
}

if(dinnerChoices[1] === "Italian"){

    iWantToEat++;

    console.log("Not feeling italian");


}else if(dinnerChoices[2] === "Oriental"){

    iWantToEat++;

    console.log("Not feeling oriental");

}else{

if(dinnerChoices[3] === "Indian"){

    iWantToEat++;

    console.log("Not feeling indian");

}

}
