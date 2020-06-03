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
function cambiarUnidades( {
    var metro, pulgada, pie, yarda;
    if (valor.includes(",")) {
        valor = valor.replace(","".")
    }
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido" + id);

    } else if (id == "metro") {
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28082 * valor;
        yarda = 1.09361 * valor;
    } else if (id == "pulgada") {
        pulgada = valor;
        metro = 0.0254 * valor;
        pie = 0.08333333 * valor;
        yarda = 0.0277778 * valor;
    } else if (id == "yarda") {
        yarda = valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    } else if (id == "pie") {
        pie = valor;
        metro = 0.30488
        valor;
        pulgada = 12 * valor;
        yarda = 0.33 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(x:metro*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(X:yarda*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(X:pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(X:pie*100)/100;
}
    function convertirGr(id){
        var grad, rad;
        if(id=="grados"){
            grad = document.getElementById( elementld: "grados").value;
            rad = (grad*Math.PI)/180;
        } else if(id=="radianes"){
            rad =document.getElementById(elementld: "radianes").value;
            grad = (rad*180)/Math.PI
        }
        document.getElementById(elementld: "grados").value = grad;
        document.getElementById(elementld: "radianes").value = rad;
    }
}
function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }

}
function calcularSuma(){
    var num1, num2;
    num1= Number(document.getElementsByName( elementName: "sum_num1")[0].value);
    num2= Number(document.getElementsByName( elementName: "sum_num2")[0].value);
    document.getElementsByName( elementName: "sum_total")[0].innerHTML = num1 + num1 ;
}
function calcularResta(){
    var num1, num2;
    num1= Number(document.getElementsByName( elementName: "res_num1")[0].value);
    num2= Number(document.getElementsByName( elementName: "res_num2")[0].value);
    document.getElementsByName( elementName: "res_total")[0].innerHTML= num1 - Number (num2);
}
function calcularmult(){
    var num1,num2;
    num1= Number(document.getElementsByName( elementName: "mul_num1")[0].value);
    num2= Number(document.getElementsByName( elementName: "mul_num1")[0].value);
    document.getElementsByName( elementName: "mul_total")[0].innerHTML=num1 * num2 ;

}
function calculardiv(){
    var num1,num2;
    num1= Number(document.getElementsByName( elementName: "div_num1")[0].value);
    num2= Number(document.getElementsByName( elementName: "div_num1")[0].value);
    document.getElementsByName( elementName: "div_total")[0].innerHTML=num1 / num2 ;

}
function cargarWeb() {
    var cant, unidad, urlComp;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp  = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}
function cargarResultado() {
    var urlComp, can, un;
    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext ("2d");
    var xMax = canvas.width;
   var yMax  = canvas.height;
   var margen = 5;
    ctx.fillStyle = "#890806";
    ctx.fillRect(0+margen,yMax-40-margen,40,40);
    ctx.arc(xMax/2,yMax/2,40,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle= "#877728";
    ctx.fill();
}
var bandera;
function dibujar(e){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = e.clientX;
    var posY = e.clientY;
    console.log(posX,posY);
    canvas.onmousedown= function(){bandera = true};
    canvas.onmouseup= function(){bandera = false};
    if (bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }


}
function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width=canvas.width;
}