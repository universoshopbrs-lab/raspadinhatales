import { db } from "./firebase.js";

import {

doc,

updateDoc

} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

const grid = document.getElementById("game");

const result = document.getElementById("result");

let revealed = [];

for(let i=0;i<9;i++){

let cell = document.createElement("div");

cell.className="cell";

cell.innerText="?";

cell.onclick=function(){

reveal(cell);

};

grid.appendChild(cell);

}

function reveal(cell){

if(cell.innerText!=="?") return;

let symbol = symbols[Math.floor(Math.random()*symbols.length)];

cell.innerText=symbol;

revealed.push(symbol);

if(revealed.length===9){

checkWin();

}

}

async function checkWin(){

let count={};

revealed.forEach(s=>{

count[s]=(count[s]||0)+1;

});

let premio="Não ganhou";

for(let s in count){

if(count[s]>=3 && s!=="❌"){

premio=s;

}

}

result.innerText="Resultado: "+premio;

const ref = doc(db,"raspadinhas",window.code);

await updateDoc(ref,{

usado:true,

premio:premio,

data:new Date().toISOString()

});

}
