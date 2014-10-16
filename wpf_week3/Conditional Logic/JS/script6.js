/**
 * Created by SarahShank on 10/14/14.
 */
//ELSE IF **ALWAYS requires a condition **else never has a condition attached to it

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent
if(kidHeight > minHeight ){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride but only with a parent");

}else{
    //sorry you have growing to do
    console.log("Sorry kid, You've got some growing to do")
}