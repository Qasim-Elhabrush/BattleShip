export const shipMap = {
  carrier: 5,
  battleship: 4,
  submarine: 3,
  cruiser: 3,
  destroyer: 2,
};
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

export function selectShipEventListener() {
  const ships = document.querySelectorAll(".ship");
  ships.forEach((ship) => {
    ship.addEventListener("click", () => {
      if (ship.classList.contains("placed")) {
      } else {
        let selectedShips = document.getElementsByClassName("selected");
        if (selectedShips.length == 1) {
          selectedShips[0].classList.remove("selected");
        }
        ship.classList.add("selected");
      }
    });
  });
}

export function gridSquareHoverEventlistener() {
  let gridSquares = document.querySelectorAll(".squares");
  gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let selectedShips = document.querySelectorAll(".selected");
      let selectedShip = selectedShips[0];
      console.log(selectedShip);
      let nameOfShip = selectedShip.id;
      let squareID = square.id;
      let length = shipMap[nameOfShip];
      let affiliatedSquares = [];

      if (square.classList.contains("taken") != true) {
        for (let i = 1; i < length; i++) {
          affiliatedSquares.push(
            document.getElementById(
              `[${squareID[1]}][${parseInt(squareID[4]) - i}]`
            )
          );
        }

        if (parseInt(squareID[4]) - length + 1 < 0) {
          square.style.backgroundColor = "rgb(191, 49, 49)";
          affiliatedSquares.forEach((affiliatedSquare) => {
            if(affiliatedSquare.classList.contains("taken")!=true)
            {affiliatedSquare.style.backgroundColor = "rgb(191, 49, 49)";}
            
          });
        } else {
          affiliatedSquares.forEach((affiliatedSquare) => {
            if(affiliatedSquare.classList.contains("taken")!=true){ affiliatedSquare.style.backgroundColor = "rgb(37, 185, 37)";}
           
          });
          square.style.backgroundColor = "rgb(37, 185, 37)";
        }
      }
    });

    square.addEventListener("mouseout", () => {
      let selectedShips = document.querySelectorAll(".selected");
      let selectedShip = selectedShips[0];
      console.log(selectedShip);
      let nameOfShip = selectedShip.id;
      let squareID = square.id;
      let length = shipMap[nameOfShip];
      let affiliatedSquares = [];

      if (square.classList.contains("taken") != true) {
        for (let i = 1; i < length; i++) {
          affiliatedSquares.push(
            document.getElementById(
              `[${squareID[1]}][${parseInt(squareID[4]) - i}]`
            )
          );
        }
        if (parseInt(squareID[4]) - length + 1 < 0) {
          square.style.backgroundColor = "rgb(58, 58, 196)";
          affiliatedSquares.forEach((affiliatedSquare) => {
            if(affiliatedSquare.classList.contains("taken")!=true){affiliatedSquare.style.backgroundColor = "rgb(58, 58, 196)";}
            
          });
        } else {
          affiliatedSquares.forEach((affiliatedSquare) => {
            if(affiliatedSquare.classList.contains("taken")!=true){affiliatedSquare.style.backgroundColor = "rgb(58, 58, 196)";}
            
          });
          square.style.backgroundColor = "rgb(58, 58, 196)";
        }
      }
    });
  });
}
export function placeShipsSubmit(){
  let shipSubmit = document.getElementById("shipSubmit");
  shipSubmit.addEventListener("click",()=>{
    checkShipPlacement();
    let shipContainer = document.getElementById("placeShips");
    shipContainer.remove();



  })


}

function checkShipPlacement(){
  const carrier = document.getElementById("carrier");
  const battleship= document.getElementById("battleship");
  const cruiser = document.getElementById("cruiser");
  const submarine = document.getElementById("submarine");
  const destroyer=document.getElementById("destroyer");

}