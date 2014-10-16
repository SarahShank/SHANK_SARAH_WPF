/**
 * Created by SarahShank on 10/16/14.
 */
/*Sarah Shank
WPF WDD144-O Section 01
Conditional_Assignment_Industry Week 3
10-15-2014*/
//prompting user for name
var name = prompt("Please enter your name");
//validating if user left blank
if(name === "")
{//prompting user for name again
    name = prompt("Your name was not captured, Please enter your name")
}
//prompting user to enter in a number to answer the question
var myExperience = Number(prompt("Enter your years of computer experience",5));
//if users answer is between 0 and 10
if (myExperience >= 0 && myExperience <= 10)
{//print to console.log
    console.log(name + "'s" + " computer experience is between 0 and 10 years");
}//if else user will fall into another category
else if((myExperience >=10 && myExperience <=20)|| (myExperience >=20 && myExperience <= 30))
{//printing to console.log
    console.log(name + "'s" + " computer experience is between 10 and 20 years " + " or " + name + "'s" + " computer experience is between 20 and 30 years");
}//if else again user will fall into another category
 else {//printing to console.log
    console.log(name + "'s" + " computer experience is not between 0 and 10 years, " + " nor is it between 10 and 20 years, nor is it between 20 and 30 years.");
}
//alerting user of their final output
alert(name + " has " + myExperience + " years of computer experience!");
console.log(name + " has " + myExperience + " years of computer experience!");