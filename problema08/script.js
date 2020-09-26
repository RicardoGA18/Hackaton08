//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularDolares);

//texto
const paso02 = document.getElementById("paso02");

function calcularDolares(){
    //Reciviendo datos
    let soles = parseFloat(document.getElementById("soles").value);
    let precio = parseFloat(document.getElementById("precio").value);

    //validando
    if((soles)&&(precio)){
        if((soles>0)&&(precio>0)){
            //solucion
            let dolares = soles/precio;

            //escribiendo
            paso02.innerHTML = `${soles} / ${precio} = ${dolares}`;
        }
        else{
            paso02.innerHTML = "Ingrese bien los datos";
        }
    }
    else{
        paso02.innerHTML = "Ingrese bien los datos";
    }
}