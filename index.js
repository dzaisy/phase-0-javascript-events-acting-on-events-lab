// Your code here
const dodger = document.getElementById("dodger");
// grabs the dodger

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  // build our moveDodgerLeft() function, adding a check on the current position of the dodger:

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
 //Now let's wire this up to our event listener 

 function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
 }

 document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") {
        moveDodgerRight();
    }
 });

