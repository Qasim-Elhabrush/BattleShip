import Gameboard from "./factoryFunctions/gameboardFactory"
import Player from "./factoryFunctions/playerFactory"
import Ship from "./factoryFunctions/shipFactory"
import {getRandomInt} from "./supporting"
import Computer from "./factoryFunctions/computerFactory"
import css from "./stylesheet.css"


/*
class Gameplay{
    constructor(){
        this.playerOne = new Player();        
        this.computerPlayer = new Computer();}
    playerPlaceShip(x,y,name,length){      
        this.playerOne.gameboard.placeShip(x,y,name,length);
    }
    computerPlaceShip(name,length){
        this.computerPlayer.gameboard.placeShip(getRandomInt(0,9),getRandomInt(0,9),name,length);
    }
    placeShips(){
        let carrierX = prompt("Where would you like to place your carrier?(x)");
        let carrierY = prompt("Where would you like to place your carrier?(y)");
        this.playerPlaceShip(carrierX,carrierY,"Carrier",5);
        let battleshipX = prompt("Where would you like to place your battleship?(x)");
        let battleshipY = prompt("Where would you like to place your battleship?(y)");
        this.playerPlaceShip(battleshipX,battleshipY,"Battleship",4);
        let submarineX = prompt("Where would you like to place your submarine?(x)");
        let submarineY = prompt("Where would you like to place your submarine?(y)");
        this.playerPlaceShip(submarineX,submarineY,"Carrier",3);
        let cruiserX = prompt("Where would you like to place your cruiser?(x)");
        let cruiserY = prompt("Where would you like to place your cruiser?(y)");
        this.playerPlaceShip(cruiserX,cruiserY,"Carrier",3);
        let destroyerX = prompt("Where would you like to place your destroyer?(x)");
        let destroyerY = prompt("Where would you like to place your destroyer?(y)");
        this.playerPlaceShip(destroyerX,destroyerY,"destroyer",2);
        this.computerPlaceShip("Carrier",5);
        this.computerPlaceShip("Battleship", 4);
        this.computerPlaceShip("Submarine",3);
        this.computerPlaceShip("Cruiser",3);
        this.computerPlaceShip("Destroyer",2);
    }
    play(){
        let gameEnded;
        while(gameEnded!=true){
            let attackLocationX = prompt("Where would you like to attack the computer(x)");
            let attackLocationY = prompt("Where would you like to attack the computer(y)");
            this.playerOne.attack(this.computerPlayer,attackLocationX,attackLocationY);
            if(this.computerPlayer.gameboard.allSunk()==true){
                gameEnded=true
                alert("Winner")
            }
            else{
                this.computerPlayer.attack(this.playerOne,getRandomInt(0,9),getRandomInt(0,9));
                if(this.playerOne.gameboard.allSunk()==true){
                    gameEnded=true
                    alert("Winner")
                }
            }
        }
        

    }
        

}

let playGame = new Gameplay();
playGame.placeShips();
playGame.play();
*/
