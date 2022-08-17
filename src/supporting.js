import * as eventListeners from "./eventListeners";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
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

export { getRandomInt, createSquare, createEventListeners };
