import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyAMbD1Al2iME8WO9RwwAsxmVJg5TGsWfT4",

authDomain: "tales-32c5a.firebaseapp.com",

projectId: "tales-32c5a",

storageBucket: "tales-32c5a.firebasestorage.app",

messagingSenderId: "673405517524",

appId: "1:673405517524:web:b809b1663d06371aebc541"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

console.log("Firebase conectado");
