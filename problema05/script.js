//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularArea);

//texto
const paso02 = document.getElementById("paso02");

//pi
const pi = 3.1415926535897;

function calcularArea(){
    //Reciviendo datos
    let radio = parseFloat(document.getElementById("radio").value);

    //validando
    if(radio){
        //solucion
        let area = pi * (Math.pow(radio,2));

        //escribiendo
        paso02.innerHTML = `π x (${radio})<sup>2</sup> = ${area}`;
    }
    else{
        paso02.innerHTML = "Ingrese bien el radio"
    }
}