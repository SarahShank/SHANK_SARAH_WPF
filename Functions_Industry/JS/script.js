/*
 Sarah Shank
 WPF WDD144-O Section 01
 Functions_Assignment_Personal Week 4
 10-22-2014
 */

var gender = prompt(" Please enter your gender \n CASE SENSITIVE \n MALE or FEMALE");

if(gender === "")
{
    gender = prompt(" Please do not leave blank. \n CASE SENSITIVE \n Male or FEMALE")
}

if(gender === "MALE"){
    console.log("Hello Sir")

}
 else if(gender === "FEMALE"){

   console.log("Hello Lady");}

var subscription;

subscription = (gender >= "MALE") ? "Males magazine subscription" : "Females magazine subscription";
//("MALE" > "FEMALE") ? "Males magazine subscription" : "Females magazine subscription";
console.log(subscription);







/*console.log (gender);

var budget = 180.00;
var annualSubscription= 59.99;
var savings = 120.00;
    if (budget < annualSubscription && savings > 180){
        console.log(" You can buy the magazine subscription!");

    }
}

*/


//var age = 6;
//var book;
//If the child is under 10, they get Green Eggs and Ham, Otherwise they get The Time Machine
/* if(age <10){
 book = "Green Eggs and Ham";
 }else{
 book ="The Time Machine";
 }
 console.log(book);*/
//book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
//console.log(book);

