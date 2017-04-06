var viborita =document.getElementById('viborita');
var posicionX = 0;
var posicionY = 0;
// var teclas ={
//   left:37;
//   right:39;
//   up:38;
//   down:40;
// }
viborita.addEventListener("keydown",avanzar);

 function avanzar(e){
   var pruba= e.keycode;
   console.log(prueba);
 }
 

  // switch (event.keycode){
  //   case 37://izquierda
  //   //solo se usara top para subir o bajar(+ o -) left que indica mov. de lados derecho o izq.
  //   viborita.style.left = posicionX-10 + "px";
  //   break;
  //   case 39:
  //   viborita.style.left= posicionX +10 +"px";
  //   break;
  //   case 38:
  //   viborita.style.= posicionX +10 +"px";
  //
