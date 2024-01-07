import {Estado} from "./State.js";
export class EstadoHambriento extends Estado{
    constructor(tamagochi){
        super();
        this.tamagochi = tamagochi;
    }
    getEstado(){
        return "hambriento";
    }
    alimentar(){
        this.tamagochi.vida = (this.tamagochi.vida < 100) ? this.tamagochi.vida + 1 : this.tamagochi.vida;
        this.tamagochi.energia = (this.tamagochi.energia < 98) ? this.tamagochi.energia += 2 : 100;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad += 2 : 100;
    };
    mimar(){
        console.log("No quiero cariño, tengo hambre");
    };
    golpear(){
        this.tamagochi.vida = (this.tamagochi.vida > 0) ? -- this.tamagochi.vida: 0;
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? this.tamagochi.energia -= 2 : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad > 0) ? -- this.tamagochi.felicidad : 0;
    };
    jugar(){
    };
    curar(){
        this.tamagochi.vida = 100;
        this.tamagochi.energia = 100;
        this.tamagochi.felicidad = 50;
    };
    bajaStats(){
        this.tamagochi.vida -= 2;
        this.tamagochi.energia -= 2;
        this.tamagochi.felicidad --;
    };
}