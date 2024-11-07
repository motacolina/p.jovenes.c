const genesis = document.querySelectorAll('.fotos');
let repite = 0;

function ocultarImagenActual() {
    genesis[repite].classList.remove('active');

    repite = (repite + 1) % genesis.length;

    genesis[repite].classList.add('active');
}

setInterval(ocultarImagenActual, 3000);