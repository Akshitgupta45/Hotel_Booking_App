// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA8_OLa9AaiXP8BNRz34zKPWIxzP3RFhU8",
	authDomain: "bookstay-888db.firebaseapp.com",
	projectId: "bookstay-888db",
	storageBucket: "bookstay-888db.appspot.com",
	messagingSenderId: "140930897688",
	appId: "1:140930897688:web:7f0e9f1ea86ddd9640b06d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
