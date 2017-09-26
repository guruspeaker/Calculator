/*
    Programmer: Paul Christian


*/

// this is a single line comment
var box = document.getElementById("display");
var answered = false;
var decUsed = false;


function addtodisplay(x)
{

	// ignor repeating decimal
	if (x == "." && decUsed == true)
	{
		x = "";
	}
	else if (x == "." && decUsed == false)
	{
		decUsed = true;
		box.style.border = 'thin pink solid';
	}
	//reset decimal allowance on operand add
	if (decUsed == true && (x == "+" || x == "-" || x == "*" || x == "/"))
	{
		decUsed = false;
		box.style.border = 'none';
	}

    if (x == "C")
    {
       box.value = "";
	   decUsed = false;
	   box.style.border = 'none';
    }
    else if (answered && x != "+" && x != "-" && x != "*" && x != "/")
    {
       box.value = x;
	   answered = false;
    }
	else 
	{
		box.value += x;
		answered = false;
	}
}
function backspace()
{
	var len = box.value.length;
	var newbox = box.value.substring(0,len-1);
	box.value = newbox;
	
}


function calculateresult()
{
	box.value = eval(box.value);
	answered = true;
	
}

function raisetopower(x)
{
	box.value = box.value*box.value;
	answered = true;
}

