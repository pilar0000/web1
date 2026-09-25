
// variables del juego

let puntuacion = 0;
let tiempo = 30;
let jugando = false;

let intervaloTopo;
let temporizador;

// elementos del html

const marcador = document.getElementById("puntos");
const marcadorTiempo = document.getElementById("tiempo");

const botonEmpezar = document.getElementById("empezar");
const botonReiniciar = document.getElementById("reiniciar");

const topos = document.querySelectorAll(".topo");


// hacer que aparezca el topo en una casilla aleatoria
function mostrarTopo() {

    // ocultamos los topos
    topos.forEach(topo => {
        topo.classList.remove("activo");
    });

    // elegimos una posicion aleatoria
    const numero = Math.floor(Math.random() * topos.length);

    // mostramos al topo
    topos[numero].classList.add("activo");
}


// puntuar cuando atrapamos al topo
topos.forEach(topo => {

    topo.addEventListener("click", () => {

        if (topo.classList.contains("activo") && jugando) {

            puntuacion++;

            marcador.textContent = puntuacion;

            // el topo desaparece al golpearlo
            topo.classList.remove("activo");
        }

    });

});


// empezar el juego
botonEmpezar.addEventListener("click", () => {

    jugando = true;

    // ocultamos el boton de empezar
    botonEmpezar.style.display = "none";

    intervaloTopo = setInterval(mostrarTopo, 2000);


    // temporizador
    temporizador = setInterval(() => {

        tiempo--;

        marcadorTiempo.textContent = tiempo;


        if (tiempo === 0) {

            jugando = false;

            clearInterval(temporizador);
            clearInterval(intervaloTopo);

            topos.forEach(topo => {
                topo.classList.remove("activo");
            });

            botonReiniciar.style.display = "block";

            alert("¡Tiempo agotado! Tu puntuación es: " + puntuacion);
        }

    }, 1000);

});


// reiniciar el juego
botonReiniciar.addEventListener("click", () => {

    location.reload();

});

// modo oscuro
document.addEventListener("keydown", (evento) => {

    if(evento.key === "n"){
        document.body.classList.toggle("modo-oscuro");
    }
});