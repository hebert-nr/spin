


function chooseHouse(){

var val = btn1.value;
var x = "Please enter the number of new students."
var a = "So there is going to be " + (val/4).toFixed() + " new witches and wizards in each house."
var b = "So there is going to be about " + (val/4).toFixed() + " new witches and wizards in each house, give or take."

	if(val == 0 || val == null )
	{
		alert(x)
	} 
	else if(val%4==0)
	{
		if(confirm(a))
		{
			document.getElementById("line").innerHTML= "----------";
			document.getElementById("new").style.display = "none";
			document.getElementById("thebtn").style.display = "none";
			document.getElementById("btn1").style.display = "none";
			document.getElementById("wi").innerHTML = "Let the sorting Begin!!";
			spin();
			 //when OK is pushed, this value needs to be passed into the spinner and divided equally among houses
			 //
		}
	}
	else
	{
		if(confirm(b))
		{
			document.getElementById("line").innerHTML= "----------";
			document.getElementById("new").style.display = "none";
			document.getElementById("thebtn").style.display = "none";
			document.getElementById("btn1").style.display = "none";
			document.getElementById("wi").innerHTML = "Let the sorting Begin!!";
			spin();
			 //when OK is pushed, this value needs to be passed into the spinner and divided as close to equal as possible.
		}
	}
}


function spin(){
	
var sp = document.getElementById("wheel").src = "http://wheeldecide.com/e.php?c1=Gryffindor&c2=Hufflepuff&c3=Ravenclaw&c4=Slytherin&c5=Gryffindor&c6=Hufflepuff&c7=Ravenclaw&c8=Slytherin&cols=BA224D,FAFA00,001180,1A7800,BA224D,FAFA00,001180,1A7800&t=Which+House&time=3&tcol=F2F250,000000,DEDD8E,C8CCCC,F2F250,000000,DEDD8E,C8CCCC"

}

function restart(){
window.location.reload();
}