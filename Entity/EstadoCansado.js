import {Estado} from "./State.js";
export class EstadoCansado extends Estado{
    constructor(tamagochi){
        super();
        this.tamagochi = tamagochi;
    }
    getEstado(){
        return "cansado";
    }
    alimentar(){
        this.tamagochi.vida = (this.tamagochi.vida < 100) ? ++this.tamagochi.vida : this.tamagochi.vida;
        this.tamagochi.energia = (this.tamagochi.vida < 98) ? this.tamagochi.energia += 2 : this.tamagochi.energia;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : this.tamagochi.felicidad;
    };
    mimar(){
        console.log("No quiero cariño, tengo hambre")
        //this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : this.tamagochi.felicidad;
    };
    golpear(){
        this.tamagochi.vida = (this.tamagochi.vida > 0) ? -- this.tamagochi.vida: 0;
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? -- this.tamagochi.energia : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad > 0) ? -- this.tamagochi.felicidad : 0;
    };
    jugar(){
        console.log("Estoy cansado, no quiero jugar")
    };
    curar(){
        this.tamagochi.vida = 100;
        this.tamagochi.energia = 100;
        this.tamagochi.felicidad = 50;
    };
    bajaStats(){
        this.tamagochi.vida --;
        this.tamagochi.energia -= 2;
        this.tamagochi.felicidad --;
    };
}