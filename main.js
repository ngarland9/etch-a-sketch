const container = document.getElementById("container");
let startRows = 16;
let config = "normal"


function newGrid() {
  let pixels = container.querySelectorAll('div');
  pixels.forEach(pixel => pixel.remove());
  let newRows = prompt("How many rows and columns would you like?");
  if (newRows > 100) {
    alert("Too many rows! You broke it stupid! Choose less than 100.")
    makeRows(startRows, startRows);
  }
  else {
  makeRows(newRows, newRows);
  }
}


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "box";
  };


document.querySelectorAll('.box').forEach(item => {
  item.addEventListener('mouseover', event => {
    if (config == "normal") {
      item.classList.add("box-after");
    }
    else {
      item.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;}
  })
});
};



makeRows(startRows, startRows);


document.getElementById("clear").addEventListener("click", newGrid);

document.getElementById("rainbow").addEventListener("click", function() {
  config = "rainbow";
})

document.getElementById("normal").addEventListener("click", function() {
  config = "normal";
})
