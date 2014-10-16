/**
 * Created by SarahShank on 10/16/14.
 */
/*Sarah Shank
WPF WDD144-O Section 01
Conditional_Assignment_Wacky Week 3
10-15-2014*/

//prompting user
var knockKnock = prompt("Knock Knock....");
//validating user did not leave any blanks
if(knockKnock === "")
{//prompting user to re enter
    knockKnock = prompt("Ahem....Knock Knock!");
}//printing to console.log
    console.log(knockKnock);
//alerting user
alert("Art");
//prompting user to respond
var knockKnock = prompt ("Go on...Art Who?");
//validating user has not left blank
if(knockKnock === "")
{//prompting user to respond
    knockKnock = prompt("Its Funny, you know you wanna!");
}//printing to console.log
    console.log(knockKnock);
//alerting user
alert("R2-D2!")
//variable knockKnock is assigned to YES
var knockKnock= "YES";
//prompting user for an answer
knockKnock = prompt("Would you like another joke? \n **CASE SENSITIVE** \n YES or NO");
//using a ternary to foresee the outcome
(knockKnock == "YES") ? console.log(" Knock, Knock! \n Who's there? \n Yah.\n Yah who \n No Thanks I use Google!"):console.log("Party Pooper!");



