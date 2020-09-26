//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularPromedio);

//texto
const paso02 = document.getElementById("paso02");

function calcularPromedio(){
    //Reciviendo datos
    let nota01 = parseFloat(document.getElementById("nota01").value);
    let nota02 = parseFloat(document.getElementById("nota02").value);
    let nota03 = parseFloat(document.getElementById("nota03").value);
    let nota04 = parseFloat(document.getElementById("nota04").value);

    //validando
    if((nota01)&&(nota02)&&(nota03)&&(nota04)){
        //Solucion
        let resultado = (nota01 + nota02 + nota03 + nota04)/4;

        //Escribiendo
        paso02.innerHTML = `(${nota01} + ${nota02} + ${nota03} + ${nota04}) / 4 = ${resultado}`;  
    }
    else{
        paso02.innerHTML = "Ingrese bien los datos.";
    }
}