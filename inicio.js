import { Tamagochi } from './Entity/Tamagochi.js';

let botonCargar = document.getElementById('carga');
let botonCrear = document.getElementById('crea');
let nombreInput = document.getElementById('nombre');
let tamagoGuardado = localStorage.getItem('tamagochi');
if (tamagoGuardado === null) {
    botonCrear.disabled = false;
    nombreInput.disabled = false;
    botonCargar.disabled = true;
} else {
    console.log(tamagoGuardado);
    botonCrear.disabled = true;
    nombreInput.disabled = true;
    botonCargar.disabled = false;
}

window.cargaTamagochi = function cargaTamagochi() {
    window.location.href = 'Tamagochi.html';
}

window.creaTamagochi = function creaTamagochi(){
    let nombre = nombreInput.value;
    let tamago = Tamagochi.getInstance(nombre,100,100,50,"neutral");
    let tamagoJSON =JSON.stringify(tamago, (key, value) =>{
        if (key === 'estado') {
            return tamago.getEstado();
        }
        return value;
    }) ;
    localStorage.setItem('tamagochi', tamagoJSON);
    window.location.href = 'Tamagochi.html';
}

window.borraTamagochi = function borraTamagochi(){
    localStorage.removeItem('tamagochi');
    window.location.href = 'index.html';
}