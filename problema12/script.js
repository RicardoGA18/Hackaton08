//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", calcularSalario);

//texto
const texto01 = document.getElementById("texto01");

//lista
const lista = document.getElementById("lista");

function calcularSalario(){
    //reciviendo dato
    let salario = parseFloat(document.getElementById("salario").value);

    //validando
    if(salario>0){
        texto01.innerHTML="";
        lista.style.display = "block";
        for(var i = 1; i<=6;i++){
            let id = "año" + i;
            let text = document.getElementById(id);
            text.innerHTML = `En el año ${i} su salario fue $${salario}.`;
            salario = salario * (110/100);
        }
    }
    else{
        texto01.innerHTML = "Ingrese bien los datos";
        lista.style.display = "none";
    }
}