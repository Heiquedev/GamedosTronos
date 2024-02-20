import { NobleHouse } from "./NobleHouse"
import { Heir } from "./Heir";

const darknessHouse = new NobleHouse("DAKNESSHOUSE","Um por todos e todos por um...",1000000000,3,200,[]);
const lightOfHouse = new NobleHouse("LIGHTHOUSE","Cortanto uma cabeça nasceram 7 no lugar...",20000000000,2,175,[]);
const whatherOfHouse = new NobleHouse("WHATHERHOUSE","Nunca voltar atrás com a sua palavra...",3000000000,3,250,[]);
const flameOfHouse = new NobleHouse("FLAMEHOUSE","Deixe um companheiro em batalha e nascerá um inimigo...",2500000000,3,225,[]);
const comunHouse = new NobleHouse("COMUNHOUSE","Seja você mesmo na sua casa ou no campo de batalha...",4000000000,4,300,[]);
const testHeir = new Heir("jogwato", 19, 1)

function battleOFtheHouses(
  darknessHouse: number,
  lightOfHouse: number,
  whatherOfHouse: number,
  flameOfHouse: number,
  comunHouse: number
): void {
  let phantomNumber: number = 0;
  let index: number;
  let armyNumber: Array<number> = [
    darknessHouse,
    lightOfHouse,
    whatherOfHouse,
    flameOfHouse,
    comunHouse,
  ];

  for (let i = 1; i < armyNumber.length; i++) {
    phantomNumber = armyNumber[i];
    index = i;

    while (index > 0 && armyNumber[index - 1] > phantomNumber) {
      armyNumber[index] = armyNumber[index - 1];
      index--;
    }
    armyNumber[index] = phantomNumber;
  }
  console.log(
    `The winner of the battle has won with the army number of ${armyNumber[5]}`
  );
}



battleOFtheHouses(
  darknessHouse.quantidadeSoldados,
  lightOfHouse.quantidadeSoldados,
  whatherOfHouse.quantidadeSoldados,
  flameOfHouse.quantidadeSoldados,
  comunHouse.quantidadeSoldados
);




