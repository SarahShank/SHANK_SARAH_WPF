/**
 * Created by SarahShank on 10/16/14.
 */
/*Sarah Shank
WPF WDD144-O Section 01
Conditional_Assignment_Industry Week 3
10-15-2014*/

var name = prompt("Please enter your name");

if(name === "")
{
    name = prompt("Your name was not captured, Please enter your name")
}
//console.log(name);

var myExperience = Number(prompt("Enter your years of computer experience",5));

if (myExperience >= 0 && myExperience <= 10)
{
    console.log(name + "'s" + " computer experience is between 0 and 10 years");
}
else if((myExperience >=10 && myExperience <=20)|| (myExperience >=20 && myExperience <= 30)) {
    console.log(name + "'s" + " computer experience is between 10 and 20 years " + " or " + name + "'s" + " computer experience is between 20 and 30 years");
}
 else {
    console.log(name + "'s" + " computer experience is not between 0 and 10 years, " + " nor is it between 10 and 20 years, nor is it between 20 and 30 years.");
}

alert(name + " has " + myExperience + " years of computer experience!");
console.log(name + " has " + myExperience + " years of computer experience!");