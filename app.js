import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function enviarReporte() {
    let mensaje = document.getElementById("mensaje").value;
    let status = document.getElementById("status");

    if (mensaje.trim() === "") {
        status.textContent = "Por favor escribe algo antes de enviar.";
        return;
    }

    try {
        await addDoc(collection(db, "reportes"), {
            mensaje: mensaje,
            fecha: new Date().toISOString()
        });
        status.textContent = "Reporte enviado con éxito.";
        document.getElementById("mensaje").value = "";
    } catch (error) {
        status.textContent = "Error al enviar reporte.";
        console.error("Error:", error);
    }
}
