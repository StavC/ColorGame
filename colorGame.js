var numberOfSquares=6;
var colors=generateRandomColors(numberOfSquares);
var squares= document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function()
	{

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares=3;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{

		if(colors[i])
		{

			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	});

hardBtn.addEventListener("click",function()
	{

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares=6;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{

		

			squares[i].style.background=colors[i];
		
			squares[i].style.display="block";
		
	}

	});


colorDisplay.textContent= pickedColor;
for(var i = 0; i < squares.length; i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click", function(){
		
		var clickedColor=this.style.background;
	if(clickedColor===pickedColor)
	{
		messageDisplay.textContent="correct!"
		resetButton.textContent="Play Again?"
		changeColors(clickedColor);
		h1.style.background=pickedColor
	}else
	{
		this.style.background = "#232323";
		messageDisplay.textContent="try again";
	}

	});	
	
}

function changeColors(color){
	//loop through all squares
	for(var i =0; i<squares.length;i++)
	{

		squares[i].style.background=color;
	//change each color to match given color
	}
}

function pickColor(){


	var random= Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num){
	//make an array 
	var arr=[];
	// repeat num times
	for(var i=0; i<num;i++){
	//get random color and push into arr
	arr.push(randomColor());


}

return arr;

}


function randomColor(){

	//pick a red from 0-255 
	//pick a green from 0-255 
	//pick a blue from 0-255

var red = Math.floor(Math.random()*256);	 
var green = Math.floor(Math.random()*256);	 
var blue = Math.floor(Math.random()*256);

	
	return "rgb(" + red +", "+green+", "+blue+")";
}

resetButton.addEventListener("click", function(){

	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i =0; i<squares.length;i++)
		{

			squares[i].style.background=colors[i];

		}
		h1.style.background="steelblue"
	}

	)