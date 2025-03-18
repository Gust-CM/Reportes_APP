import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Configuración de Firebase
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

// Función para enviar reportes
async function enviarReporte() {
    let mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() === "") {
        alert("Por favor escribe algo antes de enviar.");
        return;
    }

    try {
        await addDoc(collection(db, "reportes"), {
            mensaje: mensaje,
            fecha: new Date().toISOString()
        });
        alert("Reporte enviado con éxito.");
        document.getElementById("mensaje").value = "";
    } catch (error) {
        console.error("Error al enviar reporte:", error);
    }
}
