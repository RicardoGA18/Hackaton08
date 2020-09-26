//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularBono);

//texto
const texto01 = document.getElementById("texto01");

function calcularBono(){
    //Reciviendo datos
    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    //validando
    if(antiguedad>0){
        let bono;

        if(antiguedad<=5){
            bono = antiguedad * 100;
        }
        else{
            bono = 1000;
        }

        texto01.innerHTML = `Sus años de antiguedad son ${antiguedad} por lo que le corresponde ${bono}$`;
    }
    else{
        texto01.innerHTML = "Ingrese bien los datos";
    }
}