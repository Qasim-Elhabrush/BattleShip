import * as eventListeners from "./eventListeners";
import { playGame } from "./gameplay";
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
function displayWinner(nameOfLoser){
  let winningPhrase;
    if(nameOfLoser = "computer"){
      winningPhrase = "You Won! :)"    
    }
    else{
      winningPhrase = "The Computer Won! :("
      
    }
    const winnerContainer= document.getElementById("winnerContainer");
    const backgroundOverlay= document.getElementById("backgroundOverlay");
    const winnerTitle = document.getElementById("winnerTitle");
    winnerContainer.style.display = "grid";
    backgroundOverlay.style.display="flex";
    winnerTitle.innerText=winningPhrase;
}

function logHitShip(player,shipName){
 const history = document.getElementById("history");
 const newHit = document.createElement("div");
 newHit.classList.add("historyHit");
 newHit.innerText = `${player}'s ${shipName} was hit!`;
 history.appendChild(newHit);
}
function logSunkShip(player,shipName){
  const history = document.getElementById("history");
  const newSink = document.createElement("div");
  newSink.classList.add("historyHit");
  newSink.innerText = `${player}'s ${shipName} was sunk!`;
  history.appendChild(newSink);
 }


export { getRandomInt, createSquare, createEventListeners,displayWinner,logHitShip,logSunkShip};
