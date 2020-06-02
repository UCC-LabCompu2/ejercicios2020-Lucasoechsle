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
function cambiarUnidades(id , valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";

    } else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;
    }else if (id=="yarda"){
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value = 3*valor;
        document.lasUnidades.unid_metro.value = 0.9144*valor;
    }else if (id=="pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.0833333*valor;
        document.lasUnidades.unid_yarda.value = 0.0277778*valor;
    }else if (id=="pie") {
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
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
function mos(valorMO) {
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
    document.getElementsByName( elementName: "sum_total")[0].value = num1 + num1 ;
}
function calcularResta(){
    var num1, num2;
    num1= Number(document.getElementsByName( elementName: "res_num1")[0].value);
    num2= Number(document.getElementsByName( elementName: "res_num2")[0].value);
    document.getElementsByName( elementName: "res_total")[0].value= num1 - Number (num2);
}
function calcularmult(){
    var num1,num2;
    num1= Number(document.getElementsByName( elementName: "mul_num1")[0].value);
    num2= Number(document.getElementsByName( elementName: "mul_num1")[0].value);
    documennt.getElementsByName( elementName: "mul_total")[0].value=num1 * num2 ;

}