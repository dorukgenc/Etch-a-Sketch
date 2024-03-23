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
      square.style.width = `${600 / n}px`;
      square.style.height = `${600 / n}px`;

      square.addEventListener("mouseover", () => {
        square.classList.add("black");
      });
      row.appendChild(square);
    }
  }
}
createGrid(16);

const newGridButton = document.querySelector(".newGridButton");
newGridButton.addEventListener("click", () => {
  edge = prompt("Number: ");
  createGrid(edge);
});
