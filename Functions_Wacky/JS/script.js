/*Sarah Shank
WPF WDD144-O Section 01
Functions_Assignment_Wacky Week 4
10-22-2014*/
//prompt the user for your favorite
var yourFavorite= prompt("STAR WARS VS STAR TREK \n Choose your favorite \n CASE SENSITIVE");
//validating prompt
if(yourFavorite === "")
{//prompt user to re enter your favorite
    yourFavorite = prompt(" I know it can be tough...but you must choose \n CASE SENSITIVE \n STAR WARS VS STAR TREK");
}
//if you chose STAR WARS
if(yourFavorite === "STAR WARS"){
    //print to console.log
    console.log("May the force be with you")

}//or if gender is STAR TREK
else if(yourFavorite === "STAR TREK"){
//print to console.log
    console.log("Live long and prosper");}
//variable
var outcome;
//ternary
outcome = (yourFavorite <= "STAR WARS") ? "Do. Or do not. There is no try." : "Fascinating";
//("STAR WARS" > "STAR TREK") ? "Do. Or do not. There is no try." : "Fascinating";
//print to console.log
console.log(outcome);
//anonymous function

//do loop
var yourFavorite = 1000;

do{//printing results to console.log
    console.log( yourFavorite + " THIS IS AWESOME!!!!...and slightly annoying."); // code will be ran even if the condition is true or false
       yourFavorite--;
}

while( yourFavorite > 0); // condition
