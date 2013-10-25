var canvas=document.getElementById("cutscene");
var context=canvas.getContext("2d");

var sceneFps=60;

var allImgScene=["entity","enemy"];
for(i=0;i<allImgScene.length;i++){
window["img"+allImgScene[i]]=new Image();
window["img"+allImgScene[i]].src="images/"+allImgScene[i]+".png";
}

setInterval(function(){


//Draws a line begining at x=1 y=2 ending at x=3 y=4 with color #000000
context.beginPath();
context.moveTo(1,2);
context.lineTo(3,4);
context.strokeStyle="#000000";
context.stroke();

//Draws a rectangle at x=1 y=2 width=3 height=4 with color #000000
context.beginPath();
context.strokeStyle="#000000";//Rectangle color
context.rect(1,2,3,4);
context.stroke();

//Draws a rectangle at x=1 y=2 width=3 height=4 filled with color #000000
context.fillStyle="#000000";
context.fillRect(1,2,4,5);


//Draws entity.png at x=1 x=2 width=3 height=4
var img=window["img"+"entity"];
context.drawImage(img,1,2,3,4);


//Draws "Weapon" at x=1 y=2 with font size "20" and font "Arial"
context.fillStyle="#000000";
context.font="20px Arial";
context.fillText("Weapon",1,2);



},sceneFps);