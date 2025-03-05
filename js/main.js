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

// Handles the start of a drag event.
// Stores a reference to the dragged puzzle piece so it can be moved later.

function handleStartDrag() {
  console.log("started dragging this piece: ", this);
  draggedPiece = this;
}

// Prevents the default dragover behavior to allow dropping elements.

function handleDragOver(e) {
  e.preventDefault();
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

  this.appendChild(draggedPiece);
}

// event listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);
dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));
