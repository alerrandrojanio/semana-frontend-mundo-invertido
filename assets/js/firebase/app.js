  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCkyvVY8rtBIXLxfbBfSg9UqEQTSnMRar4",
    authDomain: "semana-mundo-invertido-bf680.firebaseapp.com",
    projectId: "semana-mundo-invertido-bf680",
    storageBucket: "semana-mundo-invertido-bf680.appspot.com",
    messagingSenderId: "945975061528",
    appId: "1:945975061528:web:3b62f9a0c6e1fc237ae76d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  export default app