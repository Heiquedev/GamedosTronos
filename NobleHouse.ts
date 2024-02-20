import { Heir } from "./Heir";
export class NobleHouse{

    nome:string;
    lema:string;
    quantidadeDinheiro:number;
    quantidadeHerdeiros:number;
    quantidadeSoldados:number;
    infoHerdeiros: string[];
    
constructor (nome:string,lema:string,quantidadeDinheiro:number,quantidadeHerdeiros:number,quantidadeSoldados:number, infoHerdeiros: string[]){
    this.nome = nome;
    this.lema = lema;
    this.quantidadeDinheiro = quantidadeDinheiro;
    this.quantidadeHerdeiros = quantidadeHerdeiros;
    this.quantidadeSoldados = quantidadeSoldados;
    this.infoHerdeiros = infoHerdeiros;

}
addherdeiros(){
this.infoHerdeiros.push(Heir.name)

}

checkSucessao(){
    return `Quantidade de herdeiros são de ${this.quantidadeHerdeiros} e seus nomes são ${this.infoHerdeiros} `
}

}

