import {EstadoCansado} from "./EstadoCansado.js";
import {EstadoEnfermo} from "./EstadoEnfermo.js";
import {EstadoFeliz} from "./EstadoFeliz.js";
import {EstadoHambriento} from "./EstadoHambriento.js";
import {EstadoMuerto} from "./EstadoMuerto.js";
import {EstadoNeutral} from "./EstadoNeutral.js";
import {EstadoTriste} from "./EstadoTriste.js";
export class FactoryEstados {
    constructor() { }
    static factoryEstado(estado, tamagochi) {
        switch (estado) {
            case "cansado":
                return new EstadoCansado(tamagochi);
            case "enfermo":
                return new EstadoEnfermo(tamagochi);
            case "feliz":
                return new EstadoFeliz(tamagochi);
            case "hambriento":
                return new EstadoHambriento(tamagochi);
            case "muerto":
                return new EstadoMuerto(tamagochi);
            case "neutral":
                return new EstadoNeutral(tamagochi);
            case "triste":
                return new EstadoTriste(tamagochi);
            default:
                return new EstadoNeutral(tamagochi);
        }
    }
}