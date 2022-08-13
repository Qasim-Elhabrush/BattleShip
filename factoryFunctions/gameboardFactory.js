import Ship from "./shipFactory";

export default class gameboard{
    constructor(){
        this.board = [[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,]]
        this.missedShots = [];
        this.ships = []
    }
    initialize(){
        for(let i=0;i<10;i++){
            for(let j = 0;j<10;j++)
            this.board[i][j] ={shipName:undefined,shipIndex:undefined}
            
        }
    }

    placeShip(baseX,baseY,nameOfShip,lengthOfShip){
        let currentShip = new Ship(nameOfShip,lengthOfShip)
        this.ships.push(currentShip);
        currentShip.index=this.ships.length-1;
        let spotsTaken;

        if(lengthOfShip+baseY<10){
                for(let h=0;h<lengthOfShip;h++){
                    if(this.board[baseX][baseY+h].shipName != undefined&&
                       this.board[baseX][baseY+h].shipIndex != undefined){
                        spotsTaken = true
                        return false
                       }
                    else{spotsTaken = false}
                }
                if(spotsTaken!=true){
                    for(let i=0;i<lengthOfShip;i++){
            this.board[baseX][baseY+i].shipName = nameOfShip;
            this.board[baseX][baseY+i].shipIndex = currentShip.index;}}
            else{return false}        
        }
        else{return false}
    }
           
           
     receiveAttack(coordinateX,coordinateY){
        if(this.board[coordinateX][coordinateY].shipName == undefined&&this.board[coordinateX][coordinateY].shipIndex == undefined){
        this.missedShots.push([coordinateX][coordinateY])
        return true
        }        
        else{
            let indexOfHitShip = this.board[coordinateX][coordinateY].shipIndex;
            let hitShip =this.ships[indexOfHitShip];
            hitShip.hits.push([coordinateX][coordinateY]);
        }
    }
    allSunk(){
        if(this.ships.length==0){return "no ships to sink"}
        else{
        let allShipsSunk = true;
        this.ships.forEach(ship=>{
            if(ship.isSunk()!=true){
                allShipsSunk = false;
            }            
        })
        return allShipsSunk}
    }  
}
