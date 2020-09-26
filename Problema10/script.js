//boton
const boton = document.getElementById("boton");
boton.addEventListener("click", validarDatos);

//texto
const texto01 = document.getElementById("texto01");
const texto02 = document.getElementById("texto02");
const texto03 = document.getElementById("texto03");
const texto04 = document.getElementById("texto04");
const texto05 = document.getElementById("texto05");
const texto06 = document.getElementById("texto06");

function validarDatos(){
    //Reciviendo datos
    nombre1 = document.getElementById("nombre1").value;
    edad1 = parseInt(document.getElementById("edad1").value);

    nombre2 = document.getElementById("nombre2").value;
    edad2 = parseInt(document.getElementById("edad2").value);

    nombre3 = document.getElementById("nombre3").value;
    edad3 = parseInt(document.getElementById("edad3").value);

    //validando
    if((edad1>0)&&(edad2>0)&&(edad3>0)){
        if((!(parseInt(nombre1)))&&(!(parseInt(nombre2)))&&(!(parseInt(nombre3)))){
            hallarMenor();
        }
        else{
            texto01.innerHTML = "Ingrese bien los datos";
            texto02.innerHTML = "";
            texto03.innerHTML = "";
            texto04.innerHTML = "";
            texto05.innerHTML = "";
            texto06.innerHTML = "";
        }
    }
    else{
        texto01.innerHTML = "Ingrese bien los datos";
        texto02.innerHTML = "";
        texto03.innerHTML = "";
        texto04.innerHTML = "";
        texto05.innerHTML = "";
        texto06.innerHTML = "";
    }
}

function hallarMenor(){
    texto01.innerHTML = `Comparando el la edad de ${nombre1} primera persona con la de ${nombre2} y ${nombre3}:`
    if((edad1<edad2)&&(edad1<edad3)){
        texto02.innerHTML = `${nombre1}: ${edad1} años < ${nombre2}: ${edad2} años`;
        texto03.innerHTML = `${nombre1}: ${edad1} años < ${nombre3}: ${edad3} años`;
        texto04.innerHTML = `Por lo tanto el menor es ${nombre1}, con ${edad1} años.`;
    }
    else if((edad1<edad2)&&(edad1>edad3)){
        texto02.innerHTML = `${nombre1}: ${edad1} años < ${nombre2}: ${edad2} años`;
        texto03.innerHTML = `${nombre1}: ${edad1} años > ${nombre3}: ${edad3} años`;
        texto04.innerHTML = `Por lo tanto el menor es ${nombre3}, con ${edad3} años.`;
    }
    else if((edad1>edad2)&&(edad1<edad3)){
        texto02.innerHTML = `${nombre1}: ${edad1} años > ${nombre2}: ${edad2} años`;
        texto03.innerHTML = `${nombre1}: ${edad1} años < ${nombre3}: ${edad3} años`;
        texto04.innerHTML = `Por lo tanto el menor es ${nombre2}, con ${edad2} años.`;
    }
    else if((edad1>edad2)&&(edad1>edad3)){
        texto02.innerHTML = `Persona 1: ${edad1} años < Persona 2: ${edad2} años`;
        texto03.innerHTML = `Persona 1: ${edad1} años < Persona 3: ${edad3} años`;
        texto04.innerHTML = `En este caso se necesitara comparar la edad de ${nombre2} con la de ${nombre3}`;
        if(edad2<edad3){
            texto05.innerHTML = `${nombre2}: ${edad2} años < ${nombre3}: ${edad3} años`;
            texto06.innerHTML = `Por lo tanto el menor es ${nombre2}, con ${edad2} años.`;
        }
        else{
            texto05.innerHTML = `${nombre2}: ${edad2} años > ${nombre3}: ${edad3} años`;
            texto06.innerHTML = `Por lo tanto el menor es ${nombre3}, con ${edad3} años.`;
        }
    }
}
