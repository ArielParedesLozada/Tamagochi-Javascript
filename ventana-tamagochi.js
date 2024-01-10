import { Observer } from './Entity/Observer.js';
import { Tamagochi } from './Entity/Tamagochi.js';
import { TamagochiVestido } from './Entity/DecoratorRopa.js';
import { TamagochiLimpio } from './Entity/DecoratorLimpieza.js';


let vestido = false;
let limpio = false;
let tamagoJSON = JSON.parse(localStorage.getItem('tamagochi'));
let tamago = new Tamagochi(tamagoJSON.nombre, tamagoJSON.vida, tamagoJSON.energia, tamagoJSON.felicidad, tamagoJSON.estado);
let vidaLlena = document.getElementById('vida-llena');
let energiaLlena = document.getElementById('energia-llena');
let felicidadLlena = document.getElementById('felicidad-llena');
let imagenTamagochi = document.getElementById('imagen-tamagochi');
let boton

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
window.vestir = function vestir() {
    if (vestido) {
        tamago = tamago.getTamagochi();
        console.log("Se le ha desvestido a su tamagochi");

        vestido = false;
    } else {
        tamago = new TamagochiVestido(tamago.getTamagochi());
        console.log("Se le ha vestido a su tamagochi");
        vestido = true;
    }
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}

window.limpiar = function limpiar(){
    if (limpio) {
        tamago = tamago.getTamagochi();
        console.log("Se ha ensuciado a su tamagochi");
        limpio = false;
    } else {
        tamago = new TamagochiLimpio(tamago.getTamagochi());
        console.log("Se ha limpiado a su tamagochi");
        limpio = true;
    }
    console.log(tamago.getVida());
    console.log(tamago.getEnergia());
    console.log(tamago.getFelicidad());
    console.log(tamago.getEstado());
}

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