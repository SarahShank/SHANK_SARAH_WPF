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

var cashFlow = function(budget, annualSubscription, savings){

   var flow = budget + savings - annualSubscription;
    return flow;
}

var a = cashFlow(180.00, 59.99, 120.00);
console.log(a);

var budget = 180.00;
var annualSubscription= 59.99;
var savings = 120.00;
    if (budget < annualSubscription && savings > 180) {
        console.log(" You can buy the magazine subscription!");


    }


