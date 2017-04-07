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
      break;
      //up
      case 38:
      posicionY= posicionY - 20;
      viborita.style.marginTop = posicionY  + 'px';
      break;
      //right
      case 39:
       posicionX = posicionX + 20;
       viborita.style.marginLeft = posicionX + 'px';
       break;
       //left
       case 37:
       posicionX = posicionX - 20;
       viborita.style.marginLeft = posicionX  + 'px';
       break;
   }
 }
