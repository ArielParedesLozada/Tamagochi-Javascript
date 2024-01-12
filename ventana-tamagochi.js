import { Observer } from './Entity/Observer.js';
import { Tamagochi } from './Entity/Tamagochi.js';
import { TamagochiVestido } from './Entity/DecoratorRopa.js';
import { TamagochiLimpio } from './Entity/DecoratorLimpieza.js';


let vestido = false;
let limpio = false;
let puedeCurar = true; 
let tamagoJSON = JSON.parse(localStorage.getItem('tamagochi'));
let tamago = Tamagochi.getInstance(tamagoJSON.nombre, tamagoJSON.vida, tamagoJSON.energia, tamagoJSON.felicidad, tamagoJSON.estado);
let vidaLlena = document.getElementById('vida-llena');
let energiaLlena = document.getElementById('energia-llena');
let felicidadLlena = document.getElementById('felicidad-llena');
let imagenTamagochi = document.getElementById('imagen-tamagochi');

let tamagoGuardado = localStorage.getItem('tamagochi');
if (tamagoGuardado !== null) {
    let tamago = JSON.parse(tamagoGuardado);
    document.getElementById('tamagotchi-nombre').innerHTML = tamago.nombre;
}

function mostrarMensajeTemporal(mensaje, duracionMilisegundos) {
    var mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.position = 'fixed';
    mensajeDiv.style.top = '40px';
    mensajeDiv.style.left = '50%';
    mensajeDiv.style.transform = 'translate(-50%, -50%)';
    mensajeDiv.style.backgroundColor = '#fff';
    mensajeDiv.style.padding = '20px';
    mensajeDiv.style.border = '1px solid #ccc';
    mensajeDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    mensajeDiv.style.zIndex = '9999';

    document.body.appendChild(mensajeDiv);

    setTimeout(function () {
        mensajeDiv.style.display = 'none';
    }, duracionMilisegundos);
}


window.alimentar = function alimentar() {
    tamago.alimentar();
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}
window.mimar = function mimar() {
    tamago.mimar();
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}
window.golpear = function golpear() {
    tamago.golpear();
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}
window.jugar = function jugar() {
    tamago.jugar();
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}
window.curarTamagochi = function curarTamagochi() {
    if (puedeCurar) {
        tamago.curar();
        console.log("Tamagochi curado:");
        console.log("Vida: " + tamago.getVida());
        console.log("Energía: " + tamago.getEnergia());
        console.log("Felicidad: " + tamago.getFelicidad());
        console.log("Estado: " + tamago.getEstado());
        puedeCurar = false;

        setTimeout(function() {
            puedeCurar = true;
        }, 12000);
    } else {
        alert("Debe esperar, no se puede curar ahora");
    }
}

window.curar = function curar() {
    curarTamagochi();
}

window.muestraVida = function muestraVida() {
    let vestidoMensaje = vestido ? "Vestido" : "Desvestido";
    let limpioMensaje = limpio ? "Limpio" : "Sucio";
    mostrarMensajeTemporal(
        "Vida: " + tamago.getVida() +
        "\nEnergía: " + tamago.getEnergia() +
        "\nFelicidad: " + tamago.getFelicidad() +
        "\nEstado: " + tamago.getEstado() +
        "\nNombre: " + tamago.nombre +
        "\nVestimenta: " + vestidoMensaje +
        "\nAseo: " + limpioMensaje, 2000);
}
window.vestir = function vestir() {
    let escudo = document.getElementById('escudo');

    if (vestido) {
        tamago = tamago.getTamagochi();
        alert("Se le ha desvestido a su tamagochi");
        vestido = false;
        escudo.style.display = 'none';
    } else if (tamago.getEstado() !== "muerto") {
        tamago = new TamagochiVestido(tamago.getTamagochi());
        alert("Se le ha vestido a su tamagochi");
        vestido = true;
        escudo.style.display = 'block';
        escudo.style.width = '350px';
        escudo.style.height = '200px';
        escudo.style.top = (imagenTamagochi.offsetTop + imagenTamagochi.offsetHeight / 1.5 - escudo.offsetHeight / 2) + 'px';
        escudo.style.left = (imagenTamagochi.offsetLeft + imagenTamagochi.offsetWidth / 0.5 - escudo.offsetWidth / 2) + 'px';

    } else {
        alert(tamago.nombre + " ha fallecido y no lo podemos vestir jamás ")
    }

    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}


window.limpiar = function limpiar(){
    if (limpio) {
        alert("Se ha ensuciado a su tamagochi");
        limpio = false;
        document.getElementById("limpia").disabled = false;
    } else if (tamago.getEstado() !== "muerto") {
        tamago = new TamagochiLimpio(tamago.getTamagochi());
        alert("Se ha limpiado a su tamagochi");
        limpio = true;
        document.getElementById("limpia").disabled = true;
    } else {
        alert(tamago.nombre + " ha Facellido ya no se puede ensuciar ni limpiar jamás ")
    }
}

setInterval(function() {
    if (limpio) {
        limpiar();
    }
}, 12000);

window.guardar = function guardar(){
    let tamagoJSON =JSON.stringify(tamago.getTamagochi(), (key, value) =>{
        if (key === 'estado') {
            return tamago.getEstado();
        }
        return value;
    }) ;
    localStorage.setItem('tamagochi', tamagoJSON);
    window.location.href = 'index.html'
}

let vidaObserver = new Observer(() => {
    vidaLlena.style.width = `${tamago.getVida()}%`;
    vidaLlena.innerText = `${tamago.getVida()}%`;
    vidaLlena.style.textAlign = 'right';
});
let energiaObserver = new Observer(() => {
    energiaLlena.style.width = `${tamago.getEnergia()}%`;
    energiaLlena.innerText = `${tamago.getEnergia()}%`;
    energiaLlena.style.textAlign = 'right';
});
let felicidadObserver = new Observer(() => {
    felicidadLlena.style.width = `${tamago.getFelicidad()}%`;
    felicidadLlena.innerText = `${tamago.getFelicidad()}%`;
    felicidadLlena.style.textAlign = 'right';
});
let imagenObserver = new Observer(() => {
    imagenTamagochi.src = "../images/t" + tamago.getEstado() + ".png";
});

tamago.setearEstado();
tamago.addObserver(vidaObserver);
tamago.addObserver(energiaObserver);
tamago.addObserver(felicidadObserver);
tamago.addObserver(imagenObserver);