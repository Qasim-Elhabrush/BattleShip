import Gameboard from "./gameboardFactory"
export default class player{
    constructor(){
        this.gameboard = new Gameboard("player");
        this.gameboard.initialize();
    
    }
    attack(playerName,coordinateX,coordinateY){
        playerName.gameboard.receiveAttack(coordinateX,coordinateY);
    }
}

