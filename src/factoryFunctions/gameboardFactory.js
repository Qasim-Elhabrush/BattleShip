import Ship from "./shipFactory";
import { getRandomInt, createSquare } from "../supporting";
import { shipMap } from "../eventListeners";
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
    this.attacked = false;
  }
  initialize() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = {
          shipName: undefined,
          shipIndex: undefined,
          placed: false,
          hit: false,
          sunk: false,
          missedAttack:false
        };
        createSquare(`[${i}][${j}]`);
      }
    }
    this.placeShipEventListener();
  }

  placeShipEventListener() {
    if (this.playerOrComputer == "computer") {
      return;
    }
    let gridSquares = document.querySelectorAll(".squares");
    gridSquares.forEach((square) => {
      square.addEventListener("click", () => {
        let selectedShips = document.querySelectorAll(".selected");
        let selectedShip = selectedShips[0];
        let nameOfShip = selectedShip.id;
        let length = shipMap[nameOfShip];
        if (square.style.backgroundColor == "rgb(37, 185, 37)") {
          let squareID = square.id;
          this.placeShip(
            parseInt(squareID[1]),
            parseInt(squareID[4]),
            nameOfShip,
            length
          );
          selectedShip.classList.remove("selected");
          selectedShip.classList.add("placed");
          this.updateBoard();
        }
      });
    });
  }
  updateBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (
          this.board[i][j].placed == true &&
          this.playerOrComputer == "player"
        ) {
          let boardSquare = document.getElementById(`[${i}][${j}]`);
          boardSquare.style.backgroundColor = "rgb(23, 234, 136)";
          boardSquare.classList.add("taken");
        } else if (this.board[i][j].hit == true && this.board[i][j].sunk!=true) {
          let boardSquare = document.getElementById(`[${i}][${j}]`);
          boardSquare.style.backgroundColor = "rgb(205, 92, 27)";
        } 
        else if(this.board[i][j].sunk==true){
          let boardSquare = document.getElementById(`[${i}][${j}]`);
          boardSquare.style.backgroundColor = "rgb(0,0,0)";
        }
        else if(this.board[i][j].missedAttack ==true){
          let boardSquare = document.getElementById(`[${i}][${j}]`);
          boardSquare.style.backgroundColor = "rgb(0,0,0)";
        }
        else {
          let boardSquare = document.getElementById(`[${i}][${j}]`);
          boardSquare.style.backgroundColor = "rgb(58, 58, 196)";
        }
      }
    }
    if(this.allSunk()){
      console.log("winner")
    }
  }

  placeShip(baseX, baseY, nameOfShip, lengthOfShip) {
    if (this.playerOrComputer == "player") {
      let currentShip = new Ship(nameOfShip, lengthOfShip);
      for (let h = 0; h < lengthOfShip; h++) {
        if (
          this.board[baseX][baseY - h].shipName != undefined &&
          this.board[baseX][baseY - h].shipIndex != undefined
        ) {
          return false;
        }
      }
      this.ships.push(currentShip);
      currentShip.index = this.ships.length - 1;
      for (let i = 0; i < lengthOfShip; i++) {
        this.board[baseX][baseY - i].shipName = nameOfShip;
        this.board[baseX][baseY - i].shipIndex = currentShip.index;
        this.board[baseX][baseY - i].placed = true;
      }
    } else if (this.playerOrComputer == "computer") {
      let currentShip = new Ship(nameOfShip, lengthOfShip);
      if (baseY - lengthOfShip < 0) {
        return this.placeShip(
          getRandomInt(0, 9),
          getRandomInt(0, 9),
          nameOfShip,
          lengthOfShip
        );
      } else if (baseY - lengthOfShip + 1 >= 0) {
        for (let h = 0; h < lengthOfShip; h++) {
          if (
            this.board[baseX][baseY - h].shipName != undefined &&
            this.board[baseX][baseY - h].shipIndex != undefined
          ) {
            return this.placeShip(
              getRandomInt(0, 9),
              getRandomInt(0, 9),
              nameOfShip,
              lengthOfShip
            );
          }
        }

        this.ships.push(currentShip);
        currentShip.index = this.ships.length - 1;
        for (let i = 0; i < lengthOfShip; i++) {
          this.board[baseX][baseY - i].shipName = nameOfShip;
          this.board[baseX][baseY - i].shipIndex = currentShip.index;
        }
      }
    } else {
      return this.placeShip(
        getRandomInt(0, 9),
        getRandomInt(0, 9),
        nameOfShip,
        lengthOfShip
      );
    }
    this.updateBoard();
  }

  receiveAttack(coordinateX, coordinateY) { 
    const positionArr = [coordinateX,coordinateY];
    if (
      this.board[coordinateX][coordinateY].shipName == undefined &&
      this.board[coordinateX][coordinateY].shipIndex == undefined
    ) {
     
      this.missedShots.push(positionArr);
      console.log(this.missedShots);
    } else {
      let indexOfHitShip = this.board[coordinateX][coordinateY].shipIndex;
      this.board[coordinateX][coordinateY].hit =true;
      let hitShip = this.ships[indexOfHitShip]; 
      hitShip.gotHit(positionArr);
      if(hitShip.isSunk()){
        for(let i = 0;i<hitShip.hits.length;i++){
          const x = hitShip.hits[i][0];
          const y = hitShip.hits[i][1];
          this.board[x][y].sunk = true;
        }

      }
     
    }
    this.updateBoard();
  }
  allSunk() {
    if (this.ships.length == 0) {
      return false;
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
  removeBoard() {
    let parent = document.getElementById("grid");
    while (parent.firstElementChild != null) {
      parent.firstElementChild.remove();
    }
  }
  displayBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        createSquare(`[${i}][${j}]`);
      }
    }
    this.updateBoard();
  }

  computerWaitForAttack() {
    this.attacked=false;
    let gridSquares = document.querySelectorAll(".squares");
    gridSquares.forEach((square) => {
      square.addEventListener("click", () => {
        if (this.attacked == true) {
          return;
        } else {
          //this.attacked = true;
          let squareID= square.id;
          this.receiveAttack(squareID[1],squareID[4]);
        }
      });
    });
  }
}
