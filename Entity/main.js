import { Observer } from './Observer.js';
import { Tamagochi } from './Tamagochi.js';

let tamago;
let vidaObserver;

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
    console.log(tamago.vida);
}
window.creaTamagochi = function creaTamagochi() {
    const nombre = document.getElementById('nombre').value;
    tamago = new Tamagochi(nombre, 100, 100, 50, "neutral");
    tamago.setearEstado();
    let vidaLlena = document.getElementById('vida-llena');
    vidaObserver = new Observer(() => {
        const vidaActual = tamago.vida;
        vidaLlena.style.width = `${vidaActual}%`;
    });
    tamago.addObserver(vidaObserver);
    console.log(window.alimentar);
    console.log(window.mimar);
    console.log(window.golpear);
    console.log(window.jugar);
    console.log(window.curar);
}