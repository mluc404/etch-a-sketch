// PROCESS
// Data & Actions
// Data: the number of sides from user input
// Actions:
// getNumSides()
// createGrid()

// When the askButton is clicked, it'll prompt the user
// to input a number for the size of the canvas,
// then trigger the function to create the canvas.

// Select DOM elements
let askButton = document.querySelector("#askButton");
let container = document.querySelector("#container");
let containerWidth = parseInt(window.getComputedStyle(container).width);

// Set canvas size
askButton.addEventListener("click", () => {
  let input = parseInt(prompt("How many squares per side? (Max: 100)"));
  let numSide = parseInt(input);

  // check for input error
  if (isNaN(numSide) || numSide < 1 || numSide > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(numSide);
});

// Function to Create canvas
function createGrid(numSide) {
  // Clean previous grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // Creat squares
  let squareSize = containerWidth / numSide;

  for (let i = 0; i < numSide * numSide; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect inside the loop for each square
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#575757";
    });
    // Append each square into container
    container.appendChild(square);
  }
}
