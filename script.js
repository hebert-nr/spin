var list = [];

function chooseHouse(){

var val = btn1.value;
var x = "Please enter the NUMBER of new students."
var a = "So there is going to be " + (val/4).toFixed() + " new witches and wizards in each house."
var b = "So there is going to be about " + (val/4).toFixed() + " new witches and wizards in each house, give or take."

	if(val == 0 || val == null || isNaN(val))
	{
		alert(x)
	} 
	else if(val%4==0)
	{
		if(confirm(a))
		{
			document.getElementById("most").style.display = "none";
			document.getElementById("line").innerHTML= "----------";
			document.getElementById("wi").innerHTML = "Let the sorting Begin!!";
			document.getElementById("sort").style = "display: inline-block";
			loop();
			shuffle();			
		}
	}
	else
	{
		if(confirm(b))
		{
			document.getElementById("most").style.display = "none";
			document.getElementById("line").innerHTML= "----------";
			document.getElementById("wi").innerHTML = "Let the sorting Begin!!";
			document.getElementById("sort").style = "display: inline-block";
			loop();
			shuffle();
		}
	}
}

/*
Takes value entered from user and puts into an array, but only counts to 4 then repeats as there are 
4 houses to be sorted from.
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
    , temp = null

for (i = list.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = list[i]
		list[i] = list[j]
		list[j] = temp
	}
	
}


/*
Pulls the first number from the array and matches it to the house name.
*/
function sort(){
	var house = list.pop();
	
	if (house === 1)
	{
		document.getElementById("house").style.backgroundImage = 'url("gry.png")';

	}	
	else if (house === 2)
	{
		document.getElementById("house").style.backgroundImage = 'url("huf.png")';
	}
	else if (house === 3)
	{
		document.getElementById("house").style.backgroundImage = 'url("rav.png")';
	}
	else if (house ===4){
		document.getElementById("house").style.backgroundImage = 'url("sly.png")';
	}
	else{
		alert("All students sorted? Welcome to Hogwarts!" );
	}
	
}


function restart(){
window.location.reload();
}