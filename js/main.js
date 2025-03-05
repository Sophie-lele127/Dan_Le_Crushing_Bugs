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

// event listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);
dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));
