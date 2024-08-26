/************************************************************************
Script for a simple canvas use that will help user learn keys on a piano.
By Leif Dickison
************************************************************************/
var lans;
var ans;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#17202A";

var keyWid = 50;
var keyHet = 190;

//long version for now
//bundles of three are white keys
//bundles of one are black keys
//future improvments, make each key in a for loop
ctx.fillRect(1,keyHet,keyWid,4);
ctx.fillRect(1,0,1,keyHet);
ctx.fillRect(50,0,1,keyHet);

ctx.fillRect(43,0,20,110);

ctx.fillRect(55,0,1,keyHet);
ctx.fillRect(55,keyHet,keyWid,4);
ctx.fillRect(104,0,1,keyHet);

ctx.fillRect(97,0,20,110);

ctx.fillRect(109,0,1,keyHet);
ctx.fillRect(109,keyHet,keyWid,4);
ctx.fillRect(158,0,1,keyHet);

ctx.fillRect(163,0,1,keyHet);
ctx.fillRect(163,keyHet,keyWid,4);
ctx.fillRect(212,0,1,keyHet);

ctx.fillRect(205,0,20,110);

ctx.fillRect(217,0,1,keyHet);
ctx.fillRect(217,keyHet,keyWid,4);
ctx.fillRect(266,0,1,keyHet);

ctx.fillRect(259,0,20,110);

ctx.fillRect(271,0,1,keyHet);
ctx.fillRect(271,keyHet,keyWid,4);
ctx.fillRect(320,0,1,keyHet);

ctx.fillRect(313,0,20,110);

ctx.fillRect(325,0,1,keyHet);
ctx.fillRect(325,keyHet,keyWid,4);
ctx.fillRect(374,0,1,keyHet);

scr();

function scr(){
	ans = Math.floor(Math.random() * 6);
	if (lans == ans)//this makes sure to check that the number is unique from
	//previous attempt each time
	{
		ans = Math.floor(Math.random() * 6);
	}
	//Cleans up last match by painting over with white
	else {
		ctx.fillStyle = "#ffffff";//white
		DotPlace(lans)
		ctx.fillStyle = "#fe0000";//red
		DotPlace(ans);
	}
}
//Stored sperately to be called by wither white or red box fill
//So each ctx is where the red dot (or clean up dot) will be
function DotPlace(ans){
	switch (ans){
		case 0:
			ctx.fillRect(18,170,15,15);
			lans = ans;
			break;
		case 1:
			ctx.fillRect(72,170,15,15);
			lans = ans;
			break;
		case 2:
			ctx.fillRect(126,170,15,15);
			lans = ans;
			break;
		case 3:
			ctx.fillRect(180,170,15,15);
			lans = ans;
			break;
		case 4:
			ctx.fillRect(234,170,15,15);
			lans = ans;
			break;
		case 5:
			ctx.fillRect(288,170,15,15);
			lans = ans;
			break;
		case 6:
			ctx.fillRect(342,170,15,15);
			lans = ans;
			break;
		default:
		//if lans is null then this is first run, and will not error every refresh
			if (lans != null)
			{
				alert("Random number error")
			}
	}
}
//Handles Checks for correct and incorrect radio button presses
function SubButt()
{
	let compar = document.getElementsByName('musKey');
	let i;
    let correctAmountRef = document.getElementById('rightVar');
    let incorrectAmountRef = document.getElementById('wrongVar');
    let correctAmount = Number(correctAmountRef.innerHTML);
    let incorrectAmount = Number(incorrectAmountRef.innerHTML);
    console.log(correctAmount, incorrectAmount);

	for (i = 0; i < compar.length; i++)
	{
		if (compar[i].checked && compar[i].value == ans){
			alert("Correct");
            correctAmountRef.innerHTML = ++correctAmount;
			scr();
		}
		else if (compar[i].checked && compar[i].value != ans)
		{
            incorrectAmountRef.innerHTML = ++incorrectAmount;
			alert("Incorrect, please try again");
		}
	}
}
/*Possible imporvements:
Black keys
score/streak
Non-selection option
error message for first run on switch
*/