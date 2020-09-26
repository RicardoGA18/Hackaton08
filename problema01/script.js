//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", sumarArgumentos);

//Texto
const paso02 =document.getElementById("paso02");

function sumarArgumentos(){
    //Reciviendo datos
    let argumento1 = parseFloat(document.getElementById("argumento1").value);
    let argumento2 = parseFloat(document.getElementById("argumento2").value);
    
    //Validando datos
    if((argumento1)&&(argumento2)){
        //Solucion
        let resultado = argumento1 + argumento2;

        //Escribiendo
        paso02.innerHTML = `${argumento1} + ${argumento2} = ${resultado}`;
    }
    else{
        paso02.innerHTML = "Ingrese bien los datos."
    }
}
    
