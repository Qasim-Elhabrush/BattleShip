export function moveHistoryEventListener() {
  let moveHistoryTitle = document.getElementById("moveHistoryTitle");
  let history = document.getElementById("history");
  moveHistoryTitle.addEventListener("click", () => {
    if (history.classList.contains("active")) {
      history.className = "";
      history.style.display = "none";
    } else {
      history.className = "active";
      history.style.display = "flex";
    }
  });
}

export function selectShipEventListener(){
  const ships = document.querySelectorAll(".ship")
  ships.forEach(ship => {
    ship.addEventListener("click",()=>{
      let selectedShip = document.getElementsByClassName("selected");
      selectedShip[0].classList.remove("selected");
      ship.classList.add("selected");

    })    
  });
}

export function gridSquareHoverEventlistener(shipID){
    const shipMap = {
      "carrier": 5,
      "battleship":4,
      "submarine":3,
      "cruiser":3,
      "destroyer":2
    }
    const selectedShips = document.querySelectorAll(".selected");
    const selectedShip = selectedShips[0];
    const nameOfShip = shipID;
    const gridSquares = document.querySelectorAll(".squares");
    gridSquares.forEach(square=>{
      square.addEventListener("mouseover",()=>{
        const squareID = square.id;
        console.log(squareID);
      })
    })

    


}
