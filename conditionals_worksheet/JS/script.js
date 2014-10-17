/**
 * Created by SarahShank on 10/16/14.
 */





//Hot Enough?<br> //Is it hot enough to go to the beach?<br> var temp= 80;<br> //if the temperature is less than 75 to 75<br>      console.log(“We will go to the movies.”);<br> }

var name = prompt("please enter your name");
if (name === "") {
    name = prompt("Okay Mr. Smith");

    console.log(name);

}

var temp = prompt("please enter your current air temperature in degrees celsius or fahrenheit");

if (temp === "celsius");
{
    temp = temp + 32;
    temp = temp * (9 / 5);

    alert(name + " then it must be " + temp + " degrees fahrenheit ");
}

{
  temp === ("fahrenheit");

    temp = temp - 32;
    temp = temp * (5/9);

    alert("then it must be " + temp + " degrees celsius");
}

if (temp >= 80 + " fahrenheit " || temp >= 26 + " celsius");
{
    alert("Yay its warm enough to go to the beach!");
}

(temp <= 79 + " fahrenheit " || temp <= 25 + " celsius");

{
    alert("It is too cold to go to the beach!");
}

