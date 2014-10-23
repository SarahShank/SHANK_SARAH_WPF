/**
 * Created by SarahShank on 10/22/14.
 */
/*
 Sarah Shank
 WPF WDD144-O Section 01
 Functions_Assignment_Personal Week 4
 10-22-2014
 */
//prompt the user for gender
var gender = prompt(" Please enter your gender \n CASE SENSITIVE \n MALE or FEMALE");
//validating prompt
if(gender === "")
{//prompt user to re enter gender
    gender = prompt(" Please do not leave blank. \n CASE SENSITIVE \n Male or FEMALE")
}
//if gender is male
if(gender === "MALE"){
    //print to console.log
    console.log("Hello Sir")

}//or if gender is female
else if(gender === "FEMALE"){
//print to console.log
    console.log("Hello Ma'am");}
//variable
var subscription;
//ternary
subscription = (gender >= "MALE") ? "Males magazine subscription" : "Females magazine subscription";
//("MALE" > "FEMALE") ? "Males magazine subscription" : "Females magazine subscription";
//print to console.log
console.log(subscription);
//anonymous function
var cashFlow = function(budget, annualSubscription, savings){
//variable with parameters
    var flow = budget + savings - annualSubscription;
    return flow;
} //variable
var a = cashFlow(100.00, 59.99, 180.00);
console.log(a);//print to console.log
//variable
var budget = 100.00;
var annualSubscription= 59.99;
var savings = 180.00;
//if budget is greater then AND savings is greater or equal to
if (budget > annualSubscription && savings >= 180) {
    //print to console.log
    console.log(" You can buy the magazine subscription!");
   //if else
}else{//print to console.log
    console.log(" You cannot afford the magazine subscription");
}