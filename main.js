import { Observer } from './Entity/Observer.js';
import { Tamagochi } from './Entity/Tamagochi.js';

let tamago;
let vidaLlena = document.getElementById('vida-llena');
let energiaLlena = document.getElementById('energia-llena');
let felicidadLlena = document.getElementById('felicidad-llena');
let imagenTamagochi = document.getElementById('imagen-tamagochi');

window.alimentar = function alimentar() {
    tamago.alimentar();
    console.log(tamago.vida);
    console.log(tamago.energia);
    console.log(tamago.felicidad);
    console.log(tamago.getEstado());
}
window.mimar = function mimar() {
    tamago.mimar();
    console.log(tamago.vida);
    console.log(tamago.energia);
    console.log(tamago.felicidad);
    console.log(tamago.getEstado());
}
window.golpear = function golpear() {
    tamago.golpear();
    console.log(tamago.vida);
    console.log(tamago.energia);
    console.log(tamago.felicidad);
    console.log(tamago.getEstado());
}
window.jugar = function jugar() {
    tamago.jugar();
    console.log(tamago.vida);
    console.log(tamago.energia);
    console.log(tamago.felicidad);
    console.log(tamago.getEstado());
}
window.curar = function curar() {
    tamago.curar();
    console.log(tamago.vida);
    console.log(tamago.energia);
    console.log(tamago.felicidad);
    console.log(tamago.getEstado());
}
window.muestraVida = function muestraVida() {
    console.log(tamago.vida);
    console.log(tamago.energia);
    console.log(tamago.felicidad);
    console.log(tamago.getEstado());
}
window.creaTamagochi = function creaTamagochi() {
    const nombre = document.getElementById('nombre').value;
    tamago = new Tamagochi(nombre, 100, 100, 50, "neutral");
    let vidaObserver = new Observer(() => {
        vidaLlena.style.width = `${tamago.vida}%`;
        vidaLlena.innerText = `${tamago.vida}%`;
        vidaLlena.style.textAlign = 'right';
    });
    let energiaObserver = new Observer(() => {
        energiaLlena.style.width = `${tamago.energia}%`;
        energiaLlena.innerText = `${tamago.energia}%`;
        energiaLlena.style.textAlign = 'right';
    });
    let felicidadObserver = new Observer(() => {
        felicidadLlena.style.width = `${tamago.felicidad}%`;
        felicidadLlena.innerText = `${tamago.felicidad}%`;
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