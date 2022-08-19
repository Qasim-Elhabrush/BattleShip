import * as eventListeners from "./eventListeners";
function getRandomInt(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function createSquare(id) {
  const grid = document.getElementById("grid");
  let square = document.createElement("div");
  square.id = id;
  square.className = "squares";
  grid.appendChild(square);
}

function createEventListeners() {
  eventListeners.moveHistoryEventListener();
  eventListeners.selectShipEventListener();
  eventListeners.gridSquareHoverEventlistener();
 eventListeners.shipsPlaced();
}



export { getRandomInt, createSquare, createEventListeners};
