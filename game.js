const symbols = [
"🧀",
"🧀",
"🛵",
"💰",
"🥤",
"🥤",
"🎟",
"🍔",
"❌"
];

function startGame(){

let phone = document.getElementById("phone").value;

if(phone.length < 8){

document.getElementById("msg").innerText =
"Digite um telefone válido";

return;

}

generateGrid();

}

function generateGrid(){

const grid = document.getElementById("game");

grid.innerHTML = "";

let cells = [];

for(let i=0;i<9;i++){

let cell = document.createElement("div");

cell.className = "cell";

cell.innerText = "?";

cell.onclick = function(){

reveal(cell);

};

grid.appendChild(cell);

cells.push(cell);

}

}

function reveal(cell){

let symbol =
symbols[Math.floor(Math.random()*symbols.length)];

cell.innerText = symbol;

}
