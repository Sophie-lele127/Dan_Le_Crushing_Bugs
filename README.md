# Dan_Le_Crushing_Bugs

# Drag-and-Drop Puzzle Game

## Overview

This project is a JavaScript-based drag-and-drop puzzle game. Two issues were identified and fixed:

1. Allowing multiple pieces in a single drop zone.
2. Puzzle pieces not resetting when switching backgrounds.

## Identified Bugs & Fixes

### Bug #1: Multiple Pieces in One Drop Zone

- **Issue:** More than one puzzle piece can be placed in a drop zone.
- **Fix:** Updated `handleDrop()` to check if a drop zone already contains a piece before allowing another one.
- **Reference:**
  - [MDN - Node.children](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
  - [Stack Overflow - Prevent multiple elements in a div](https://stackoverflow.com/questions/)

### Bug #2: Puzzle Pieces Not Resetting on Background Change

- **Issue:** When switching backgrounds, puzzle pieces stay in the drop zones.
- **Fix:** Modified `changeBGImage()` to move all placed pieces back to the drag area before updating the background.
- **Reference:**
  - [MDN - appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
  - [W3Schools - Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)

## Testing the Fixes

1. **For Bug #1:** Drag multiple pieces and try placing them in the same drop zone. Only one piece should be allowed.
2. **For Bug #2:** Place pieces in drop zones, switch the background, and check that all pieces return to the drag area.

## Final Steps

- Commit changes to GitHub in separate branches:
  - `dev.fix.multiple-pieces`
  - `dev.fix.reset-pieces`
- Merge to `master` branch after testing.
- Submit GitHub repository link as per assignment requirements.
