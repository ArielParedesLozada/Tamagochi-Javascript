import { Decorator } from "./Decorator.js";

export class TamagochiVestido extends Decorator{
    constructor(tamagochi) {
        super(tamagochi);
    }

    getTamagochi(){
        return this.tamagochi;
    }

    getVida(){
        return this.tamagochi.vida;
    };

    getEnergia(){
        return this.tamagochi.energia;
    };

    getFelicidad(){
        return this.tamagochi.felicidad;
    };

    setEstado(estado) {
        this.tamagochi.setEstado(estado);
    };
    getEstado(){
        return this.tamagochi.getEstado();
    };
    alimentar(){
        this.tamagochi.alimentar();
        this.tamagochi.felicidad += 0.25;
    };
    mimar(){
        this.tamagochi.mimar();
        this.tamagochi.felicidad += 0.25;
    };
    golpear(){
        this.tamagochi.golpear();
        this.tamagochi.vida +=0.5;
    };
    jugar(){
        this.tamagochi.jugar();
        this.tamagochi.energia += 0.25;
    };
    curar(){
        this.tamagochi.curar();
    };
    setearEstado() {
        this.tamagochi.setearEstado();
    };
}