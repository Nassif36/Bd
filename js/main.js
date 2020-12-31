const itemAbierto = document.getElementsByClassName('acordeon-item');
const preguntaAbierta = document.getElementsByClassName('pregunta');


for (var i = 0; i < itemAbierto.length; i++) {
    itemAbierto[i].addEventListener('click', function () {
        this.classList.toggle('abierto');

    });

}