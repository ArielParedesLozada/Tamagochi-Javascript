import {Estado} from "./State.js";
export class EstadoMuerto extends Estado{
    constructor(tamagochi){
        super();
        this.tamagochi = tamagochi;
        this.tamagochi.vida = 0;
        this.tamagochi.energia = 0;
        this.tamagochi.felicidad = 0;
    }
    getEstado(){
        return "muerto";
    }
    alimentar(){
    };
    mimar(){
    };
    golpear(){
    };
    jugar(){
    };
    curar(){
    };
    bajaStats(){
    };
}