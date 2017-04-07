var posicionX = 0;
var posicionY = 0;
var viborita =document.getElementById('viborita');

document.addEventListener("keydown",avanzar);

 function avanzar(){
   switch(event.keyCode){
     //down
     case 40:
      posicionY= posicionY + 20;
      viborita.style.marginTop = posicionY + 'px';
      gameOver();
      break;
      //up
      case 38:
      posicionY= posicionY - 20;
      viborita.style.marginTop = posicionY  + 'px';
      gameOver();
      break;
      //right
      case 39:
       posicionX = posicionX + 20;
       viborita.style.marginLeft = posicionX + 'px';
       gameOver();
       break;
       //left
       case 37:
       posicionX = posicionX - 20;
       viborita.style.marginLeft = posicionX  + 'px';
       gameOver();
       break;
   }
 }
function gameOver(){
  if(posicionX > 480||posicionX< 0){
alert("gameover!");
 window.location.reload();
  }
  if(posicionY > 480 ||posicionY < 0) {
  alert("gameover!");
  window.location.reload();
  }

}
