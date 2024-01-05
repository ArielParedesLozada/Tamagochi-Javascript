import {Estado} from "./State.js";
export class EstadoFeliz extends Estado{
    constructor(tamagochi){
        super();
        this.tamagochi = tamagochi;
    }
    getEstado(){
        return "feliz";
    }
    alimentar(){
        this.tamagochi.vida = (this.tamagochi.vida < 100) ? this.tamagochi.vida ++ : this.tamagochi.vida;
        this.tamagochi.energia = (this.tamagochi.energia < 98) ? this.tamagochi.energia += 2 : this.tamagochi.energia;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : this.tamagochi.felicidad;
    };
    mimar(){
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 95) ? this.tamagochi.felicidad += 5 : 100;
    };
    golpear(){
        this.tamagochi.vida = (this.tamagochi.vida > 0) ? -- this.tamagochi.vida: 0;
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? -- this.tamagochi.energia : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad > 0) ? -- this.tamagochi.felicidad : 0;
    };
    jugar(){
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? this.tamagochi.energia -- : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad += 5 : 100;
    };
    curar(){
        this.tamagochi.vida = 100;
        this.tamagochi.energia = 100;
        this.tamagochi.felicidad = 50;
    };
    bajaStats(){
        this.tamagochi.vida -= 0.15;
        this.tamagochi.energia -= 0.15;
        this.tamagochi.felicidad -= 0.15;
    };
}