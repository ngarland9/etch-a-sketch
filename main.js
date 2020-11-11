const container = document.getElementById("container");
let startRows = prompt("How many rows and columns would you like?");

function newGrid() {
  let pixels = container.querySelectorAll('div');
  pixels.forEach(pixel => pixel.remove());
  let newRows = prompt("How many rows and columns would you like?");
  makeRows(newRows, newRows);
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
    item.classList.add("box-after"); 
  })
});
};



makeRows(startRows, startRows);


document.getElementById("clear").addEventListener("click", newGrid);




