//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularEdad);

//texto
const paso02 = document.getElementById("paso02");

function calcularEdad(){
    //Reciviendo datos
    let nacimiento = parseFloat(document.getElementById("nacimiento").value);
    let año = parseFloat(document.getElementById("año").value);

    //validando
    if((nacimiento)&&(año)){
        if((nacimiento>=1900)&&(año>=2020)){
            //solucion
            let edad = año-nacimiento;

            //escribiendo
            paso02.innerHTML = `${año} - ${nacimiento} = ${edad}`;
        }
        else{
            paso02.innerHTML = "Ingrese bien los datos";
        }
    }
    else{
        paso02.innerHTML = "Ingrese bien los datos";
    }
}