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