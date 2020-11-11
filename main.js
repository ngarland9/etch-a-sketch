const container = document.getElementById("container");

function removeColor() {
  document.querySelectorAll('.box').forEach(item => {
    item.classList.remove("box-after");
})
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "box";
  };
};


let rows = prompt("How many rows and columns would you like?");
makeRows(rows, rows);






document.querySelectorAll('.box').forEach(item => {
  item.addEventListener('mouseover', event => {
    item.classList.add("box-after");
    
  })
});

document.getElementById("clear").addEventListener("click", removeColor);