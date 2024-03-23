const container = document.querySelector(".container");

function createGrid(n) {
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < n; j++) {
      let square = document.createElement("div");
      square.classList.add("square");

      row.appendChild(square);

      // Add event listener to each square element
      square.addEventListener("mouseover", () => {
        square.classList.add("black");
      });
    }
  }
}
createGrid(16);

const newGridButton = document.querySelector(".newGridButton");
newGridButton.addEventListener("click", () => {
  edge = prompt("????");
  createGrid(edge);
});
