//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularPulgadas);

//texto
const paso02 = document.getElementById("paso02");

function calcularPulgadas(){
    //Reciviendo datos
    let metros = parseFloat(document.getElementById("metros").value);

    //validando
    if(metros){
        if(metros>0){
            //solucion
            let pulgadas = metros/0.0254;

            //escribiendo
            paso02.innerHTML = `${metros} / 0.0254 = ${pulgadas}`;
        }
        else{
            paso02.innerHTML = "Ingrese bien el dato";
        }
    }
    else{
        paso02.innerHTML = "Ingrese bien el dato";
    }
}