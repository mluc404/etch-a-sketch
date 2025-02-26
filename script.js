// PROCESS
// Data & Actions
// Data: the number of sides from user input
// Actions:
// getNumSides()
// createGrid()

// When the askButton is clicked, it'll prompt the user
// to input a number for the size of the canvas,
// then trigger the function to create the canvas.

// Get user input and create canvas
let askButton = document.querySelector("#askButton");
let container = document.querySelector("#container");
let containerWidth = parseInt(window.getComputedStyle(container).width);

askButton.addEventListener("click", () => {
  // Clean canvas first
  container.innerHTML = "";

  // Get user input and create canvas
  let input = parseInt(prompt("How many squares per side?"));
  let numSide = parseInt(input);
  createGrid(numSide);
});

// Function to Create canvas
function createGrid(numSide) {
  let squareSize = containerWidth / numSide;

  for (let i = 0; i < numSide; i++) {
    for (let k = 0; k < numSide; k++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.style.width = squareSize.toString() + "px";
      square.style.height = squareSize.toString() + "px";
      container.appendChild(square);
    }
  }
  // color on squares when mouse over
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#575757";
    });
  });
}
