import { FactoryEstados } from "./FactoryEstados.js";

export class Tamagochi {
    constructor(nombre, vida, energia, felicidad, estado) {
        this.nombre = nombre;
        this.vida = vida;
        this.energia = energia;
        this.felicidad = felicidad;
        this.estado = FactoryEstados.factoryEstado(estado, this);
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    };
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    };
    setEstado(estado) {
        this.estado = FactoryEstados.factoryEstado(estado, this);
    };
    getEstado() {
        return this.estado.getEstado();
    };
    alimentar() {
        this.estado.alimentar();
        this.notifyObservers();
    };
    mimar() {
        this.estado.mimar();
        this.notifyObservers();
    };
    golpear() {
        this.estado.golpear();
        this.notifyObservers();
    };
    jugar() {
        this.estado.jugar();
        this.notifyObservers();
    };
    curar() {
        this.estado.curar();
        this.notifyObservers();
    };
    cambiaEstado() {
        this.estado.bajaStats();
        let varVida = (this.vida > 50) ? 11 : 17;
        let varEnergia = (this.energia > 25) ? 3 : 2;
        let varFelicidad = (this.felicidad > 50) ? 5 : 7;
        let varT = (varVida + varEnergia + varFelicidad) % 18;
        switch (varT) {
            case 0:
                this.setEstado("cansado");
                this.notifyObservers();
                break;
            case 1:
                this.setEstado("feliz");
                this.notifyObservers();
                break;
            case 2:
                this.setEstado("triste");
                this.notifyObservers();
                break;
            case 3:
                this.setEstado("neutral");
                this.notifyObservers();
                break;
            case 7:
                this.setEstado("hambriento");
                this.notifyObservers();
                break;
            default:
                this.setEstado("enfermo");
                this.notifyObservers();
                break;
        }
        if (this.vida <= 0) {
            this.setEstado("muerto");
            this.notifyObservers();
        }
    };
    setearEstado() {
        let intervalo = setInterval(() => {
            if (this.vida > 0) {
                this.cambiaEstado();
            } else {
                clearInterval(intervalo);
            }
        }, 1000);
    }
}