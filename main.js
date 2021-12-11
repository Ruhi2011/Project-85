canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
greencarwidth=75;
greencarheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencarx=5;
greencary=225;

function add() {
	backgroundimgTag=new Image();
    backgroundimgTag.onload=uploadBackground;
    backgroundimgTag.src=background_image;
    greencarimgTag=new Image();
    greencarimgTag.onload=uploadgreencar;
   greencarimgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencarimgTag,greencarx,greencary,greencarwidth,greencarheight);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencary>=0) {
        greencary-=10;
        console.log("When up arrow is pressed, x ="+greencarx+"|y="+greencary);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(greencary<=500) {
        greencary+=10;
        console.log("When down arrow is pressed, x ="+greencarx+"|y="+greencary);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(greencarx>=0) {
        greencarx-=10;
        console.log("When left arrow is pressed, x ="+greencarx+"|y="+greencary);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(greencarx<=700) {
        greencarx+=10;
        console.log("When right arrow is pressed, x ="+greencarx+"|y="+greencary);
        uploadBackground();
        uploadgreencar();
    }
}
