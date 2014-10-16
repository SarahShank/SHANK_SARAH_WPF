/**
 * Created by SarahShank on 10/15/14.
 */
//WEEK 3 GOTOMEETING
//created an array
var fruitBowl = ["peach", "pear", "apple", "kiwi"];
//console.log array
console.log(fruitBowl);
//change item in the array using the index
fruitBowl[0] = "pear";
//console.log fruit bowl
console.log(fruitBowl);
//dot syntax to check how many items are in the array(length is how many items)
console.log(fruitBowl.length);


//created a variable to hold the numbers of pears in array
//check item 1 in array
var numPear = 0;
//if statement to find out if each array item is a pear
 if (fruitBowl[0] === "pear"){//if fruit 1 is a pear TRUE

        numPear++;

 }else{// if it is not a pear FALSE

     console.log("this fruit is not a pear!");// tell user this is not a pear

 }

//check item 2 in array
if (fruitBowl[1] === "pear"){// is item 2 a pear?


    numPear ++;//yes, then add to num pears



}else{

    console.log("this fruit is not a pear!");
}

//check item 3 in array
if(fruitBowl[2] === "pear") {//TRUE?

    numPear++;//add num to pears

}else if(fruitBowl[3] === "peach") {//TRUE?


    console.log("this is a peach!");//console.log

}else{


    console.log("this fruit is not a pear!");//above statements are FALSE

}
    console.log(numPear);

var name = prompt("what is your name?");

console.log(name);

//validate the prompt to see if it is empty

if (name === ""){// if name is blank then reprompt the user to reprint their name

    name = prompt("Please enter your name, Don't leave it blank!");


}
console.log("Hello " + name + " you have " + numPear + " pears in your fruit bowl!");

alert("Hello " + name + " you have " + numPear + " pears in your fruit bowl!");