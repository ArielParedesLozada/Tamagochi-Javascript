import {Estado} from "./State.js";
export class EstadoTriste extends Estado{
    constructor(tamagochi){
        super();
        this.tamagochi = tamagochi;
    }
    getEstado(){
        return "triste";
    }
    alimentar(){
        this.tamagochi.vida = (this.tamagochi.vida < 100) ? ++this.tamagochi.vida : this.tamagochi.vida;
        this.tamagochi.energia = (this.tamagochi.vida < 100) ? this.tamagochi.energia += 2 : this.tamagochi.energia;
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? this.tamagochi.felicidad ++ : this.tamagochi.felicidad;
    };
    mimar(){
        this.tamagochi.felicidad = (this.tamagochi.felicidad < 100) ? ++this.tamagochi.felicidad : 100;
    };
    golpear(){
        this.tamagochi.vida = (this.tamagochi.vida > 0) ? -- this.tamagochi.vida : 0;
        this.tamagochi.energia = (this.tamagochi.energia > 0) ? this.tamagochi.energia -= 2 : 0;
        this.tamagochi.felicidad = (this.tamagochi.felicidad > 0) ? this.tamagochi.felicidad -= 2 : 0;
    };
    jugar(){
        console.log("No quiero jugar estoy triste");
    };
    curar(){
        this.tamagochi.vida = 100;
        this.tamagochi.energia = 100;
        this.tamagochi.felicidad = 50;
    };
    bajaStats(){
        this.tamagochi.vida --;
        this.tamagochi.energia -= 2;
        this.tamagochi.felicidad -= 2;
    };
}