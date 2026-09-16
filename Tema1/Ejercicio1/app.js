
//generar el numero aleatorio
const secreto = Math.floor(Math.random() * 100) + 1;

console.log("El número secreto es:", secreto);

const input = document.querySelector("#numero");
const boton = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");
const marcador = document.querySelector("#intentos");


// contador
let intentos = 0;

boton.addEventListener("click", () => {

    const numero = Number(input.value);

    // ver si el numero introducido esta entre el 1 y el 100
    if (input.value === "" || numero < 1 || numero > 100) {

        mensaje.textContent = "Introduce un número del 1 al 100";

        return;
    }

    intentos++;

    marcador.textContent = intentos;

    if (numero === secreto) {

        mensaje.textContent = `¡Correcto! Has acertado en ${intentos} intentos`;

        boton.disabled = true;

    } else if (numero < secreto) {

        mensaje.textContent = "El número es menor";

    } else {

        mensaje.textContent = "El número es mayor";
    }

});