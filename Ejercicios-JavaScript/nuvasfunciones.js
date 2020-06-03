/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades , de metros , yardas , pies y pulgadas.
 * @method cambiarUnidades
 * @param {srting} id - El id de los inputs de metros ,, yardas , pies o pulgadas.
 * @param {number} valor - El valor de llos inputs de metros , yardas , pies o pulgadas.
 * @return
 */

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
   var alturaMax = canvas.height;
   var anchoMax = canvas.width;
    // dibujar lineas hotizontales
    ctx.beginPath();
    for (var i=0;i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i = i+20;
    }
    ctx.closePath();
    // dibujar lineas verticales
    ctx.beginPath();
    for (var i=0;i<anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i = i+20;
    }
    ctx.closePath();
    // dibujar eje x
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#3e67d9";
    ctx.stroke();
    ctx.closePath();

    // dibujar eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#3e67d9";
    ctx.stroke();
    ctx.closePath();
}
function dibujarImagen(posX, posY){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width = canvas.width;
    img.onload = function(){
        ctx.drawImage(img,posX,posY);
    }

}