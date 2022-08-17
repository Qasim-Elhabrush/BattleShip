import Gameboard from "./factoryFunctions/gameboardFactory";
import Player from "./factoryFunctions/playerFactory";
import Ship from "./factoryFunctions/shipFactory";
import { getRandomInt } from "./supporting";
import Computer from "./factoryFunctions/computerFactory";
import css from "./stylesheet.css";
import player from "./factoryFunctions/playerFactory";
import * as supporting from "./supporting";
import { shipsPlaced } from "./eventListeners";

class Gameplay {
  constructor() {
    this.playerOne = new Player();
    this.computerPlayer = new Computer();
    supporting.createEventListeners();
    this.placeShipsSubmit();
  }

  computerPlaceShip(name, length) {
    this.computerPlayer.gameboard.placeShip(
      getRandomInt(0, 9),
      getRandomInt(0, 9),
      name,
      length
    );
  }
  playerOnePlaceShips() {
    this.playerOne.gameboard.displayBoard();
  }
  placeShipsSubmit() {
    let shipSubmit = document.getElementById("shipSubmit");
    shipSubmit.addEventListener("click", () => {
      if (shipsPlaced()) {
        let shipContainer = document.getElementById("placeShips");
        shipContainer.remove();
        this.computerPlaceShips();
      }
    });
  }
  computerPlaceShips() {
    this.computerPlaceShip("Carrier", 5);
    this.computerPlaceShip("Battleship", 4);
    this.computerPlaceShip("Submarine", 3);
    this.computerPlaceShip("Cruiser", 3);
    this.computerPlaceShip("Destroyer", 2);
    console.log(this.computerPlayer.gameboard.board());
  }

  play() {
    let gameEnded;
    while (gameEnded != true) {
      this.playerOne.attack(
        this.computerPlayer,
        attackLocationX,
        attackLocationY
      );
      if (this.computerPlayer.gameboard.allSunk() == true) {
        gameEnded = true;
        alert("Winner");
      } else {
        this.computerPlayer.attack(
          this.playerOne,
          getRandomInt(0, 9),
          getRandomInt(0, 9)
        );
        if (this.playerOne.gameboard.allSunk() == true) {
          gameEnded = true;
          alert("Winner");
        }
      }
    }
  }
}

let playGame = new Gameplay();
