//coded by sreeraj
var canvas=document.getElementById("canvas").getContext("2d");
const scores=document.querySelector("#score");
  var xsidex=80;
  var xsidey=80;
  var nxtx=0;
  var nxty=0;
  var fsidex=280;
  var fsidey=280;
  var tail=[];
  var tailsize=2;
  var score=0;


  window.onload=function(){
      
       alert("w:for up\na:for left\ns;for down\nd:for right \nAre Control Keys")
      document.addEventListener("keydown",control);
       game=setInterval(maingame,500);
       
  }
function maingame(){

xsidex+=nxtx;
xsidey+=nxty;


if(xsidex<0){
  xsidex=600;
}
if(xsidex>600){
  xsidex=0;
}
if(xsidey>600){
  xsidey=0;
}
if(xsidey<0){
  xsidey=600;
}

canvas.fillStyle ="black"
canvas.fillRect(0, 0, 600, 600);

for(var x=0;x<600;x+=20){
canvas.moveTo(x, 0);
canvas.lineTo(x, 600);

}


for(var y=0;y<600;y+=20){
canvas.moveTo(0, y);
canvas.lineTo(600, y);

}
canvas.strokeStyle="black"
canvas.stroke();


canvas.fillStyle="blue";
canvas.fillRect(fsidex,fsidey,20,20);

if(xsidex==fsidex&&xsidey==fsidey){
  tailsize++;
  score+=10;
  scores.innerHTML=`score:${score}`;
  var digit=(580/20)+1;
fsidex=20*Math.floor(Math.random()*digit);
  fsidey=20*Math.floor(Math.random()*digit);
  if(score>1000){
      alert("You Are A Pro Player How is it possibe")
 
  }

};
let snakehead={
  x:xsidex,
  y:xsidey
}
tail.unshift(snakehead);

tail.push({x:xsidex,y:xsidey});
while(tail.length>tailsize){
tail.pop();

}
for(var i=1;i<tail.length;i++){
  canvas.fillStyle=i==1?"red":"yellow";
  canvas.fillRect(tail[i].x,tail[i].y,20,20);
  canvas.strokeRect(tail[i].x,tail[i].y,20,20)
if(tail[i].x==snakehead.x&&tail[i].y==snakehead.y&&tailsize>5){
clearInterval(game);
alert(`gameovered your highscoreis ${score}`);
alert("refresh the page to play again")

}
}


  


}

function control(input){
console.log(input.keyCode);
console.log(input.key);

switch(input.keyCode){
case 87:
nxty-=20;
nxtx=0;

break;
case 65:
nxtx-=20;
nxty=0;
break;

case 83:
nxty+=20;
nxtx=0;
break;
case 68:
nxtx+=20;
nxty=0;
break;

}




}

