import Ship from "./shipFactory";
import { getRandomInt } from "../supporting";
export default class Gameboard {
  constructor(playerOrComputer) {
    this.board = [
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
      [, , , , , , , , ,],
    ];
    this.missedShots = [];
    this.ships = [];
    this.playerOrComputer = playerOrComputer;
  }
  initialize() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++)
        this.board[i][j] = { shipName: undefined, shipIndex: undefined };
    }
  }

  placeShip(baseX, baseY, nameOfShip, lengthOfShip) {
    if(this.playerOrComputer == "player"){
        let currentShip = new Ship(nameOfShip, lengthOfShip);
    if (lengthOfShip + baseY < 10) {
      for (let h = 0; h < lengthOfShip; h++) {
        if (
          this.board[baseX][baseY + h].shipName != undefined &&
          this.board[baseX][baseY + h].shipIndex != undefined
        ) {
          return false;
        }
      }
      this.ships.push(currentShip);
      currentShip.index = this.ships.length-1
      for (let i = 0; i < lengthOfShip; i++) {
        this.board[baseX][baseY + i].shipName = nameOfShip;
        this.board[baseX][baseY + i].shipIndex = currentShip.index;
      }
    } else {
      return false;
    }
    }

    else if(this.playerOrComputer =="computer"){
        let currentShip = new Ship(nameOfShip, lengthOfShip);
    if (lengthOfShip + baseY < 10) {
      for (let h = 0; h < lengthOfShip; h++) {
        if (
          this.board[baseX][baseY + h].shipName != undefined &&
          this.board[baseX][baseY + h].shipIndex != undefined
        ) {
         return this.placeShip(getRandomInt(0), getRandomInt(9), nameOfShip, lengthOfShip)
        }
      }
      this.ships.push(currentShip);
      currentShip.index = this.ships.length-1
      for (let i = 0; i < lengthOfShip; i++) {
        this.board[baseX][baseY + i].shipName = nameOfShip;
        this.board[baseX][baseY + i].shipIndex = currentShip.index;
      }
    }} else {
     return this.placeShip(getRandomInt(0), getRandomInt(9), nameOfShip, lengthOfShip)
    }

    }

  receiveAttack(coordinateX, coordinateY) {
    if (
      this.board[coordinateX][coordinateY].shipName == undefined &&
      this.board[coordinateX][coordinateY].shipIndex == undefined
    ) {
      this.missedShots.push([coordinateX][coordinateY]);
      return true;
    } else {
      let indexOfHitShip = this.board[coordinateX][coordinateY].shipIndex;
      let hitShip = this.ships[indexOfHitShip];
      hitShip.gotHit([coordinateX][coordinateY]);
    }
  }
  allSunk() {
    if (this.ships.length == 0) {
      return false
    } else {
      let allShipsSunk = true;
      this.ships.forEach((ship) => {
        if (ship.isSunk() != true) {
          allShipsSunk = false;
        }
      });
      return allShipsSunk;
    }
  }
}
