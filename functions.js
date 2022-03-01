// Get the elements with class="column"
let elements = document.getElementsByClassName("column-images");

// Declare a "loop" variable
let i;

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "45%";
  }
  changeBtnsStyle();
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "15%";
  }
  changeBtnsStyle();
}

function changeBtnsStyle() {
  let btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

function hideSVG() {
  document.getElementById("greenFlower").style.display = "none";
}
