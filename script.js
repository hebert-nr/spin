var list = [];
//collects the number of users and sets the display based off the number of users entered
function chooseHouse(){
var val = btn1.value;
var x = "Please enter the NUMBER of new students."
	if(val == 0 || val == null || isNaN(val))
	{
		alert(x)
	} 
	else
	{
		document.getElementById("most").style.display = "none";
		document.getElementById("line").innerHTML= "----------";
		document.getElementById("wi").innerHTML = "Let the sorting Begin!!";
		document.getElementById("sort").style.display = "inline-block";
		document.getElementsByClassName("house")[0].style.display="none";
		loop();
		shuffle();
	}
}
/*
Takes value entered from user and puts into an array, but only counts to 4 then repeats as there are 
4 houses to be sorted from.

slice removes first index, which is a blank
*/
function loop(){
	var a = btn1.value;
	var s = 0;
	for(var i = 1;i<=a;i++)
	{
		if(s >= 4){
			s=1;
		}
		else{
			s++
		}
		list[i]=s;
	}
	list = list.slice(1);
}
/*
scrambles the array created above in random order.
*/
function shuffle(){
	
	var i = 0
    , j = 0
    , temp = null;
for (i = list.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = list[i];
		list[i] = list[j];
		list[j] = temp;
	}
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}
/* Causes house image to fade in or out. */
var fadeOut = function(){
        $(".house").fadeOut("slow");
};
var fadeIn = function(){
        $(".house").fadeIn(2000);
};
/* Pulls the last number from the array and matches it to the house name. */
function sort(){
	var house = list.pop();
	var code = document.getElementsByClassName("house")[0];
	document.getElementById("wi").style.display="none";
	code.style.display="none";
	fadeOut();
	if (house === 1)
	{
		fadeIn();
		code.style.backgroundImage = 'url("gry.png")';
	}	
	else if (house === 2)
	{

		fadeIn();
		code.style.backgroundImage = 'url("huf.png")';
	}
	else if (house === 3)
	{
		fadeIn();
		code.style.backgroundImage = 'url("rav.png")';	
	}
	else if (house ===4)
	{
		fadeIn();
		code.style.backgroundImage = 'url("sly.png")';	
	}
	else{
		fadeIn("fast");
		code.style.backgroundImage='url("hogCrest.png")';
		document.getElementById("line").innerHTML="Welcome to Hogwarts!!";
		document.getElementById("sort").style.display = "none";
	}
}
//reloads the program so user can start over again 
function restart(){
window.location.reload();
}