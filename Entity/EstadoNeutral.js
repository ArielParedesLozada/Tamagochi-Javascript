import { Estado } from "./State.js";
export class EstadoNeutral extends Estado {
    constructor(tamagochi) {
        super();
        this.tamagochi = tamagochi;
    }
    getEstado() {
        return "neutral";
    }
    alimentar() {
        this.tamagochi.vida++;
        this.tamagochi.vida = (this.tamagochi.vida < 100) ? this.tamagochi.vida ++ : 100;
        this.tamagochi.energia = (this.tamagochi.vida < 100) ? this.tamagochi.energia ++ : 100;
    };
    mimar() {
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : this.tamagochi.felicidad;
    };
    golpear() {
        this.tamagochi.vida = (this.tamagochi.vida > 0) ? --this.tamagochi.vida : 0;
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? --this.tamagochi.energia : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad > 0) ? --this.tamagochi.felicidad : 0;
    };
    jugar() {
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? this.tamagochi.energia -- : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : 100;
    };
    curar() {
        this.tamagochi.vida = 100;
        this.tamagochi.energia = 100;
        this.tamagochi.felicidad = 50;
    };
    bajaStats() {
        this.tamagochi.vida--;
    };
}