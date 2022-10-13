const createCells = function () {
  const bingotable = document.getElementById("bingotable");

  for (let i = 0; i < 76; i++) {
    const bingoCellNode = document.createElement("div");
    bingoCellNode.className = "cell_class";
    const h3 = document.createElement("h3");

    h3.innerText = i + 1;
    bingoCellNode.appendChild(h3);
    bingotable.appendChild(bingoCellNode);
  }
};
window.onload = function () {
  createCells(76);
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
