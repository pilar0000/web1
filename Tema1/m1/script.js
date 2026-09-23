
let puntuacion = 0;
const marcador = document.getElementById("puntos");

const topos = document.querySelectorAll(".topo");

function mostrarTopo() {

    topos.forEach(topo => {
        topo.classList.remove("activo");
    });

    const numero = Math.floor(Math.random() * topos.length);

    topos[numero].classList.add("activo");
}

setInterval(mostrarTopo, 1000);

topos.forEach(topo => {
    topo.addEventListener("click", () => {
        if (topo.classList.contains("activo")) {
            puntuacion++;
            marcador.textContent = puntuacion;
            topo.classList.remove("activo");
        }
    });
});