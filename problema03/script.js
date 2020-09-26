//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularArea);

//texto
const paso02 = document.getElementById("paso02");

function calcularArea(){
    //Reciviendo datos
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    //validando
    if((base)&&(altura)){
        //solucion
        let area = base * altura;

        //escribiendo
        paso02.innerHTML = `${base} x ${altura} = ${area}`;
    }
    else{
        paso02.innerHTML = "Ingrese bien los datos"
    }
}