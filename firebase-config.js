// Config project Firebase "seven-kurir"
// Ini AMAN ditaro di kode frontend (bukan password rahasia).
// Yang beneran ngejaga keamanan data adalah Rules di Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyBmYQzRphaMs5dtA7I_ZdPbkBhu9kQcW3o",
  authDomain: "seven-kurir.firebaseapp.com",
  databaseURL: "https://seven-kurir-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "seven-kurir",
  storageBucket: "seven-kurir.firebasestorage.app",
  messagingSenderId: "916653817669",
  appId: "1:916653817669:web:d9e5309f59a049317d082c",
  measurementId: "G-D2T5VRLFCV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
