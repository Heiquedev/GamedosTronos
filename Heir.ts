import { HouseHeir } from "./HouseHeir"

export class Heir implements HouseHeir{

    nome:string
    idade:number
    numeroSucessao:number

    constructor (nome:string,idade:number,numeroSucessao:number){
        this.nome = nome
        this.idade= idade
        this.numeroSucessao = numeroSucessao

    }

}