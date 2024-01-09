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



window.creaTamagochiGuardado = function creaTamagochiGuardado(nombre, vida, energia, felicidad, estado) {
    tamago = new Tamagochi(nombre, vida, energia, felicidad, estado);
    console.log("El nombre de su tamagochi es: " + nombre);

    // Observadores y configuraciones adicionales aquí
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
};


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
window.guardarTamagochi = function guardarTamagochi() {
    const nombreTamagochi = localStorage.getItem('nombreTamagochi');

    const estado = {
        nombreTamagochi: nombreTamagochi,
        vidaTamagotchi: tamago.getVida(),
        energiaTamagochi: tamago.getEnergia(),
        felicidadTamagochi: tamago.getFelicidad(),
        tipoEstado: tamago.getEstado(), 
    };

    const estadoStr = JSON.stringify(estado);
    const blob = new Blob([estadoStr], { type: 'application/json' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'estadoTamagotchi.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Redirigir al login.html después de guardar
    window.location.href = '../Index.html';
    
}
window.cargarTamagochi = function cargarTamagochi() {
    const input = document.getElementById('archivoTamagochi');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const estado = JSON.parse(e.target.result);
            localStorage.setItem('estadoTamagotchi', JSON.stringify(estado));
            window.location.href = '../Tamagochi.html';
        };
        reader.readAsText(file);
    } else {
        console.error("No se seleccionó ningún archivo.");
    }
}
window.onload = function() {
    // Verifica si hay un estadoTamagotchi guardado en el localStorage
    const estadoTamagotchiJSON = localStorage.getItem('estadoTamagotchi');

    if (estadoTamagotchiJSON) {
        const estadoTamagotchi = JSON.parse(estadoTamagotchiJSON);

        // Crea un nuevo Tamagochi con la información almacenada
        tamago = new Tamagochi(
            estadoTamagotchi.nombreTamagochi,
            estadoTamagotchi.vidaTamagotchi,
            estadoTamagotchi.energiaTamagochi,
            estadoTamagotchi.felicidadTamagochi,
            estadoTamagotchi.tipoEstado
        );

        // Actualiza la interfaz gráfica o realiza otras acciones necesarias
        console.log("Tamagochi cargado exitosamente.");

        // Ejecuta la función que actualiza la interfaz y agrega observadores
        creaTamagochiGuardado(
            estadoTamagotchi.nombreTamagochi,
            estadoTamagotchi.vidaTamagotchi,
            estadoTamagotchi.energiaTamagochi,
            estadoTamagotchi.felicidadTamagochi,
            estadoTamagotchi.tipoEstado
        );
    } else {
        // Si no hay datos guardados, crea un nuevo Tamagochi
        console.log("Tamagochi NOOOOO cargado exitosamente.");
    }
};
