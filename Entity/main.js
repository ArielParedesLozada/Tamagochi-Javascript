import { Observer } from './Observer.js';
import { Tamagochi } from './Tamagochi.js';

let tamago;
let vidaObserver;
let hambreObserver;
let juegoObserver

window.alimentar = function alimentar() {
    tamago.alimentar();
}
window.mimar = function mimar() {
    tamago.mimar();
}
window.golpear = function golpear() {
    tamago.golpear();
}
window.jugar = function jugar() {
    tamago.jugar();
}
window.curar = function curar() {
    tamago.curar();
}
window.muestraVida = function muestraVida() {
    console.log("Vida: " + tamago.vida);
    console.log("Energia: " + tamago.energia);
    console.log("Felicidad: " + tamago.felicidad);
    console.log("Su estado es: " + tamago.getEstado());
}
window.creaTamagochi = function creaTamagochi() {
    const nombre = document.getElementById('nombre').value;
    tamago = new Tamagochi(nombre, 100, 100, 50, "neutral");
    tamago.setearEstado();
    let vidaLlena = document.getElementById('vida-llena');
    let energiaLlena = document.getElementById('hambre-llena');
    let felicidadLlena = document.getElementById('juego-llena');
    vidaObserver = new Observer(() => {
        const vidaActual = tamago.vida;
        vidaLlena.style.width = `${vidaActual}%`;
    });
    hambreObserver = new Observer(() => {
        const energiaActual = tamago.energia;
        energiaLlena.style.width = `${energiaActual}%`;
    });
    juegoObserver = new Observer(() => {
        const felicidadActual = tamago.felicidad;
        felicidadLlena.style.width = `${felicidadActual}%`;
    });
    tamago.addObserver(vidaObserver);
    tamago.addObserver(hambreObserver);
    tamago.addObserver(juegoObserver);
    console.log(window.alimentar);
    console.log(window.mimar);
    console.log(window.golpear);
    console.log(window.jugar);
    console.log(window.curar);
}