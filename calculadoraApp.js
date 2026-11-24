"use strict";

// Primero cogemos los elementos del HTML
const formulario = document.querySelector("#calculadora");

const campoNumero1 = document.querySelector("#numero1");
const campoNumero2 = document.querySelector("#numero2");
const campoOperacion = document.querySelector("#operacion");

const mensajeResultado = document.querySelector("#resultado");
const mensajeError = document.querySelector("#error");

const btnLimpiar = document.querySelector("#limpiar");

// Hacemos una funcion para realizar las operaciones
function calcular(numero1, numero2, operacion) {

    let resultado;

    switch (operacion) {

        case "suma":
            resultado = numero1 + numero2;
            break;

        case "resta":
            resultado = numero1 - numero2;
            break;

        case "multiplicacion":
            resultado = numero1 * numero2;
            break;

        case "division":
            resultado = numero1 / numero2;
            break;

        case "potencia":
            resultado = numero1 ** numero2;
            break;

        case "resto":
            resultado = numero1 & numero2;
            break;

        default:
            return null;
    }

    return resultado;
}

// Ahora recogemos los datos del formulario
function hacerCalculo(evento) {

    // Evitamos que se recargue la pagina
    evento.preventDefault();

    // Cogemos lo que ha introducido el usuario
    const valor1 = campoNumero1.value;
    const valor2 = campoNumero2.value;
    const operacion = campoOperacion.value;

    //Comprobamos que no esten vacios
    if(valor1 === "" && valor2 === "") {

        mensajeError.textContent = "Introduce los dos numeros enteros.";
        mensajeResultado.textContent = "";
        return;

    }else if(valor1 === ""){

        mensajeError.textContent = "Falta el primer numero entero.";
        mensajeResultado.textContent = "";
        return;

    }else if(valor2 === ""){

        mensajeError.textContent = "Falta el segundo numero entero.";
        mensajeResultado.textContent = "";
        return;
    }
    
    
    // Comprobamos que sean numeros
    if (!Number.isInteger(valor1) || !Number.isInteger(valor2)){

        mensajeError.textContent = "Caracteres no válidos, introduce numeros enteros";
        mensajeResultado.textContent = "";
        return;
        
    }


    // Convertimos los valores a numeros
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    // Llamamos a la funcion que hace los calculos
    const resultado = calcular(numero1, numero2, operacion);

    // Comprobamos si la operacion esta disponible
    if (resultado === null) {

        mensajeError.textContent = "Operacion no disponible todavia.";
        mensajeResultado.textContent = "";
        return;

    }

    // Quitamos los errores y mostramos el resultado
    mensajeError.textContent = "";

    mensajeResultado.textContent = "El resultado es: " + resultado;
}


//Creamos una funcion para limpiar los datos de la calculadora
function limpiarInfo(){

    campoNumero1.value = "";

    campoNumero2.value = "";

    //Dejamos el primer campo, que corresponde a suma, por defeco
    campoOperacion.value = "suma";

    mensajeResultado.textContent = "";

    mensajeError.textContent = "";

}

// Cuando enviamos el formulario hacemos el calculo
formulario.addEventListener("submit", hacerCalculo);

//Limpiamos informacion cuando le demos al boton limpiar
btnLimpiar.addEventListener("click",limpiarInfo);
