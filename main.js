import { Observer } from './Entity/Observer.js';
import { Tamagochi } from './Entity/Tamagochi.js';
import { TamagochiVestido } from './Entity/DecoratorRopa.js';

let vestido = false;
let tamago;
let vidaLlena = document.getElementById('vida-llena');
let energiaLlena = document.getElementById('energia-llena');
let felicidadLlena = document.getElementById('felicidad-llena');
let imagenTamagochi = document.getElementById('imagen-tamagochi');

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
window.curar = function curar() {
    tamago.curar();
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}
window.muestraVida = function muestraVida() {
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}
window.ropear = function ropear() {
    if (vestido) {
        tamago = tamago.getTamagochi();
        vestido = false;
    } else {
        tamago = new TamagochiVestido(tamago);
        vestido = true;
    }
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
    console.log("Se le ha vestido a su tamagochi");
}





let nombreTamagochi;

window.mostrarModal = function mostrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

window.cerrarModal = function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.redirigirHtml = function redirigirHtml() {
    nombreTamagochi = document.getElementById('nombre').value;
    localStorage.setItem('nombreTamagochi', nombreTamagochi);

    // Añade un pequeño retraso antes de redirigir
    setTimeout(function() {
        window.location.href = "tamagochi.html";
    }, 100);
}






window.creaTamagochi = function creaTamagochi() {
    
    const nombreTamagochi = localStorage.getItem('nombreTamagochi');

    tamago = new Tamagochi(nombreTamagochi, 100, 100, 50, "neutral");
    console.log("El nombre de su tamagochi es: " + nombreTamagochi);
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
}