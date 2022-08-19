export default class Ship {
  constructor(name, lengthOfShip) {
    this.name = name;
    this.lengthOfShip = lengthOfShip;
    this.hits = [];
    this.index;
  }

  gotHit(positionOfHit) {
    let positionAlreadyRecorded=false;
    for (let i = 0; i < this.hits.length; i++) {
      if (JSON.stringify(this.hits[i]) == JSON.stringify(positionOfHit)) {
        positionAlreadyRecorded = true;
      }
    }
    if (positionAlreadyRecorded != true) {
      this.hits.push(positionOfHit);
      console.log(this.hits);
    }
  }


  isSunk() {
    if (this.hits.length == this.lengthOfShip) {
      return true;
    } else {
      return false;
    }
  }
}
