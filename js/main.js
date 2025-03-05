// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
  puzzleBoard = document.querySelector(".puzzle-board"),
  puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
  dropZones = document.querySelectorAll(".drop-zone"),
  // store the dragged piece in a global variable
  // because we need it in the handleDrop function
  draggedPiece;

// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?

// Changes the background image of the puzzle board.
// Also resets any placed puzzle pieces by moving them back to the drag area.

function changeBGImage() {
  // the `` is a JavaScript template string. It tells the JS engine to evaluate the expression
  // inside the braces - run that little bit of code. In this case it's just pulling the ID of the
  // button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
  // and updating the background-image style of the puzzle board element.

  // Bug fix #2: Reset puzzle pieces back to the drag area when changing the background
  dropZones.forEach((zone) => {
    if (zone.children.length > 0) {
      document.querySelector(".puzzle-pieces").appendChild(zone.firstChild);
    }
  });

  puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// Handles the start of a drag event.
//  Stores a reference to the dragged puzzle piece so it can be moved later.

function handleStartDrag() {
  console.log("started dragging this piece: ", this);
  // store a reference to the puzzle piece image that we're dragging
  // so we can use it later and move it to a drop zone
  draggedPiece = this;
}

// Prevents the default dragover behavior to allow dropping elements.

function handleDragOver(e) {
  e.preventDefault(); // e is shorthand for event
  // this overrides the default dragover behaviour
  console.log("you dragged over me");
}

// Handles dropping a puzzle piece into a drop zone.
// Ensures that only one puzzle piece can be placed in a drop zone at a time.

function handleDrop(e) {
  e.preventDefault();
  console.log("dropped something on me");

  // Bug fix #1: Ensure only one puzzle piece per drop zone
  if (this.children.length > 0) {
    return; // If drop zone already has a piece, do not allow another one
  }

  // this line is going to move the dragged piece from the left side of the board
  // into whatever drop zone we choose. appendChild means "add element to the container"
  this.appendChild(draggedPiece);
}

// event listeners
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

// add drag event handling to the puzzle pieces
puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);

// add the dragover AND the drop event handling to each drop zone
dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));
