import { db } from "./firebase.js";

import {

doc,

updateDoc

} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const simbolos = [
"🍔",
"🥤",
"🧀",
"🚚",
"💰",
"❌"
];

let resultado = [];

function gerarGrid(){

for(let i=0;i<9;i++){

let simbolo = simbolos[Math.floor(Math.random()*simbolos.length)];
resultado.push(simbolo);

let card = document.createElement("div");
card.className="card";
card.innerHTML="?";

card.onclick = ()=>{

card.innerHTML=simbolo;

verificarResultado();

};

document.getElementById("game").appendChild(card);

}

}

function verificarResultado(){

let contagem={};

resultado.forEach(s=>{
contagem[s]=(contagem[s]||0)+1;
});

for(let s in contagem){

if(contagem[s]>=3){

ganhou(s);

}

}

}

function ganhou(simbolo){

let premio="";

if(simbolo=="🍔") premio="X Burguer Gratis";
if(simbolo=="🥤") premio="Coca Lata";
if(simbolo=="🧀") premio="Cheddar Gratis";
if(simbolo=="🚚") premio="Entrega Gratis";
if(simbolo=="💰") premio="5 Reais Desconto";
if(simbolo=="❌") premio="Não foi dessa vez";

alert("Resultado: "+premio);

}

const ref = doc(db,"raspadinhas",window.code);

await updateDoc(ref,{

usado:true,

premio:premio,

data:new Date().toISOString()

});

}
