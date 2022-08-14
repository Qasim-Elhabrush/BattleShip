export default class Ship{
    constructor(name,lengthOfShip){
        this.name = name;        
        this.lengthOfShip=lengthOfShip;
        this.hits = [];
        this.index;
        
        
    }
   
    gotHit(positionOfHit){
        this.hits.push(positionOfHit)
    }
    isSunk(){
        if(this.hits.length==this.lengthOfShip){
            return true
        }
        else{
            return false
        }
    }
}





