/*
 Sarah Shank
 WPF WDD144-O Section 01
 Functions_Assignment_Industry Week 4
 10-22-2014
 */
//prompting the user
var operatingSystem = prompt(" Please enter your operating system \n CASE SENSITIVE \n MAC or WINDOWS");
//validating the prompt
if(operatingSystem === "")
{//prompting the user to re enter
    operatingSystem = prompt(" Please do not leave blank. \n CASE SENSITIVE \n MAC or WINDOWS")
}
//if user chose mac
if(operatingSystem === "MAC"){
    //alert the user
    alert("Hello MAC user");
    //print to console.log
    console.log("Hello MAC user")

}// or if user chose windows
 else if(operatingSystem === "WINDOWS"){
    //alert the user
    alert("Hello Windows user");
    //print to console log
   console.log("Hello Windows User");}
//variable
var server;
//tenerary
server = (operatingSystem <= "MAC") ? "MAC Sever subscription" : "Windows server subscription";
//("MAC" > "WINDOWS") ? "MAC server subscription" : "Windows server subscription";
console.log(server);//print to console log
//variables
var income = prompt("Please enter your monthly budget");
var bills = prompt("How much are your bills?");
//alert the user
alert("You're saving 200 dollars right?");
var savings=200;
//alert the user
alert(income-bills-savings +  " Dollars is what you have left over! ");
alert("The cost for a monthly web server hosting is  59.99");
var serverCost = 59.99;
//anonymous function
var cashFlow = function(income, bills, serverCost, savings){
//variable with parameters
   var flow = income -bills - savings - serverCost;
    return flow;
}
//var a = cashFlow(100.00, 59.99, 180.00);
//console.log(a);

//var income = 1000.00;
//var serverCost= 59.99;
//var savings = 200.00;
//if users income is greater or equal to AND bills are less than
if (income >= 1000 && bills <= 740) {
    //alert the user
    alert("you can afford your server");
    //print to the console.log
    console.log(" You can afford the server");
}else{//if else do this
    alert("you cannot afford your server");//alert the user
    console.log(" You cannot afford the the server");//print to the console
}






