// PROCESS
// Data & Actions
// Data: the number of sides from user input
// Actions:
// createGrid()

// When one of the 3 sizes buttons is clicked, it'll
// trigger the function to create the canvas.

// Select DOM elements
let sizeButtons = document.querySelectorAll(".sizeButton");
// let askButton = document.querySelector("#askButton");
let container = document.querySelector("#container");
let containerWidth = parseInt(window.getComputedStyle(container).width);
let colorPicker = document.querySelector("#colorPicker");
let clearButton = document.querySelector("#clearButton");
// State variables
let currentColor = colorPicker.value;

// Set color
colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
  console.log(currentColor);
});

// Set canvas size
sizeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    let numSide = 0;
    switch (e.target.id) {
      case "10": {
        numSide = 10;
        break;
      }
      case "20": {
        numSide = 20;
        break;
      }
      case "30": {
        numSide = 30;
      }
    }
    createGrid(numSide);
  });
});

// askButton.addEventListener("click", () => {
//   let input = parseInt(prompt("How many squares per side? (Max: 100)"));
//   let numSide = parseInt(input);

//   // check for input error
//   if (isNaN(numSide) || numSide < 1 || numSide > 100) {
//     alert("Please enter a valid number between 1 and 100.");
//     return;
//   }
//   createGrid(numSide);
// });

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

    // Add hover effect color inside the loop for each square
    // Make sure color on changes when the mouse is clicked
    let isMouseDown = false;
    container.addEventListener("mousedown", () => (isMouseDown = true));
    container.addEventListener("mouseup", () => (isMouseDown = false));
    container.addEventListener("mouseleave", () => (isMouseDown = false));

    square.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = currentColor;
      }
    });

    square.addEventListener("click", (e) => {
      e.target.style.backgroundColor = currentColor;
    });

    // Append each square into container
    container.appendChild(square);
  }
}

// Clear the canvas but keep the grid
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "white";
  });
});
