import Gameboard from "./gameboardFactory"
export default class Computer{
    constructor(){
        this.gameboard = new Gameboard("computer");
    }
    attack(playerName,coordinateX,coordinateY){
        playerName.gameboard.receiveAttack(coordinateX,coordinateY);
    }}
