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
			document.getElementById("sort").style = "visibility: visible";
			loop();	 
		}
	}
	else
	{
		if(confirm(b))
		{
			document.getElementById("most").style.display = "none";
			document.getElementById("line").innerHTML= "----------";
			document.getElementById("wi").innerHTML = "Let the sorting Begin!!";
			document.getElementById("sort").style = "visibility: visible";
			loop();
		}
	}
}

/*
Takes value from t

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
	alert(list);
}

function sort(list){
	var k = 0;
	k++;
	if(k !== 0)
	{
		
	}
	alert(list.length);
}

function restart(){
window.location.reload();
}