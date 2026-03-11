const prizes = [
"🧀 Catupiry grátis",
"🧀 Cheddar grátis",
"🛵 Entrega grátis",
"💰 R$5 de desconto",
"🥤 Coca 1L",
"🥤 Coca lata",
"❌ Não foi dessa vez",
"🎟 5% de desconto no próximo pedido",
"🍔 X Burguer grátis"
];

const prize = prizes[Math.floor(Math.random() * prizes.length)];

document.getElementById("prize").innerText = prize;

const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 180;

ctx.fillStyle = "#888";
ctx.fillRect(0,0,canvas.width,canvas.height);

let drawing = false;

canvas.addEventListener("mousedown", ()=> drawing=true);
canvas.addEventListener("mouseup", ()=> drawing=false);
canvas.addEventListener("mousemove", scratch);

canvas.addEventListener("touchstart", ()=> drawing=true);
canvas.addEventListener("touchend", ()=> drawing=false);
canvas.addEventListener("touchmove", scratchTouch);

function scratch(e){
if(!drawing) return;

ctx.globalCompositeOperation = "destination-out";

ctx.beginPath();
ctx.arc(e.offsetX, e.offsetY, 20, 0, Math.PI*2);
ctx.fill();
}

function scratchTouch(e){
if(!drawing) return;

const rect = canvas.getBoundingClientRect();
const x = e.touches[0].clientX - rect.left;
const y = e.touches[0].clientY - rect.top;

ctx.globalCompositeOperation = "destination-out";

ctx.beginPath();
ctx.arc(x, y, 20, 0, Math.PI*2);
ctx.fill();
}
