import {Estado} from "./State.js";
export class EstadoEnfermo extends Estado{
    constructor(tamagochi){
        super();
        this.tamagochi = tamagochi;
    }
    getEstado(){
        return "enfermo";
    }
    alimentar(){
        this.tamagochi.vida = (this.tamagochi.vida < 100) ? this.tamagochi.vida ++ : this.tamagochi.vida;
        this.tamagochi.energia = (this.tamagochi.vida < 98) ? this.tamagochi.energia += 2 : this.tamagochi.energia;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : this.tamagochi.felicidad;
    };
    mimar(){
        this.tamagochi.felicidad ++;
    };
    golpear(){
        this.tamagochi.vida = (this.tamagochi.vida > 0) ? this.tamagochi.vida -= 5 : 0;
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? this.tamagochi.energia -= 5 : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad > 0) ? this.tamagochi.felicidad -=5 : 0;
    };
    jugar(){
        this.tamagochi.energia ++;
        this.tamagochi.felicidad --; 
    };
    curar(){
        this.tamagochi.vida = 100;
        this.tamagochi.energia = 100;
        this.tamagochi.felicidad = 50;
    };
    bajaStats(){
        this.tamagochi.vida -= 3;
        this.tamagochi.energia -= 3;
        this.tamagochi.felicidad -= 5;
    };
}