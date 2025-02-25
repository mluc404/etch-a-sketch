// PROCESS
// Data & Actions
// Data: the number of sides from user input
// Actions:
// getNumSides()
// createGrid()

// Get user input
let askButton = document.querySelector("#askButton");
let numSide = 0;

askButton.addEventListener("click", () => {
  numSide = parseInt(prompt("How many squares per side?"));
  console.log(numSide);
  createGrid();
});

// Set up canvas
let container = document.querySelector("#container");
let containerWidth = parseInt(window.getComputedStyle(container).width);

function createGrid(numSide) {
  alert("Here");
}

let NUM = 16;
// container.style.width = "400px";
// container.style.height = "400px";
console.log(container.style.width);
console.log(parseInt(window.getComputedStyle(container).width));

for (let i = 0; i < NUM; i++) {
  for (let k = 0; k < NUM; k++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = "25px";
    square.style.height = "25px";
    container.appendChild(square);
  }
}

let allSquares = document.querySelectorAll(".square");
allSquares.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#575757";
  });
  //   square.addEventListener("mouseleave", (e) => {
  //     e.target.style.backgroundColor = "";
  //   });
});
