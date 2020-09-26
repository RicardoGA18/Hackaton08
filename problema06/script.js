//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularSalario);

//texto
const paso02 = document.getElementById("paso02");

//pi
const pi = 3.1415926535897;

function calcularSalario(){
    //Reciviendo datos
    let horas = parseFloat(document.getElementById("horas").value);
    let salario = parseFloat(document.getElementById("salario").value);

    //validando
    if((horas)&&(salario)){
        if(horas < 0){
            paso02.innerHTML = "Ingrese bien los datos";
        }
        else if(horas > 48){
            paso02.innerHTML = "En el Perú la Constitución Política prevé como jornada máxima de trabajo ocho horas diarias o 48 horas semanales. Ingrese un valor legal por favor. &#128521;"
        }
        else{
            //solucion
            let semana = horas * salario;

            //escribiendo
            paso02.innerHTML = `${horas} x ${salario} = ${semana}`
        }
    }
    else{
        paso02.innerHTML = "Ingrese bien los datos";
    }
}