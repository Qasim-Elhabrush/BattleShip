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
