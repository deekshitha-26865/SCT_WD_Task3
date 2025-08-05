const cells = document.querySelectorAll(".cell");
let turn = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      cell.textContent = turn;
      turn = turn === "X" ? "O" : "X";
    }
  });
});

document.getElementById("restart").addEventListener("click", () => {
  cells.forEach((cell) => (cell.textContent = ""));
  turn = "X";
});