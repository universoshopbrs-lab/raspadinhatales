import { db } from "./firebase.js";

import {

doc,

getDoc

} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const code = params.get("code");

window.code = code;

async function check(){

if(!code){

alert("Código inválido");

return;

}

const ref = doc(db,"raspadinhas",code);

const snap = await getDoc(ref);

if(!snap.exists()){

alert("Raspadinha não encontrada");

return;

}

if(snap.data().usado){

alert("Esta raspadinha já foi utilizada");

document.body.innerHTML="Raspadinha já usada";

}

}

check();
