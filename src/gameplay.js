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

  //event listener that closes the playerone grid, the place ships display, and then calls the function that allows the computer to randomly place five ships
  placeShipsSubmit() {
    let shipSubmit = document.getElementById("shipSubmit");
    shipSubmit.addEventListener("click", () => {
      if (shipsPlaced()) {
        let shipContainer = document.getElementById("placeShips");
        shipContainer.remove();
        this.playerOne.gameboard.removeBoard();
        this.computerPlayer.gameboard.initialize();

        this.computerPlaceShips();
      }
    });
  }
  //places five ships  gameplay logic in this function for accessiblity purposes
  computerPlaceShips() {
    this.computerPlaceShip("carrier", 5);
    this.computerPlaceShip("battleship", 4);
    this.computerPlaceShip("submarine", 3);
    this.computerPlaceShip("cruiser", 3);
    this.computerPlaceShip("destroyer", 2);
    console.log(this.computerPlayer.gameboard.board);
    console.log(this.computerPlayer.gameboard.ships);
    this.computerPlayer.gameboard.waitForAttack();

  }
  play(){
  
    this.computerPlayer.gameboard.removeBoard(); 
    this.playerOne.gameboard.displayBoard();  
    setTimeout(() => {
          this.computerPlayer.attack(this.playerOne,getRandomInt(0,9),getRandomInt(0,9))
    }, 1000); 
  

    
    setTimeout(()=>{
    this.playerOne.gameboard.removeBoard()
    this.computerPlayer.gameboard.displayBoard();
    this.computerPlayer.gameboard.waitForAttack();
    }, 2000);
    }

  
  computerPlaceShip(name, length) {
    this.computerPlayer.gameboard.placeShip(
      getRandomInt(0, 9),
      getRandomInt(0, 9),
      name,
      length
    );
  }
}

let playGame = new Gameplay();
export {playGame}

