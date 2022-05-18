import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCy_jQ4x6YM_6iOgJV0lGTMQsRom7eNeNs",
	authDomain: "linkedin-clone-d177c.firebaseapp.com",
	projectId: "linkedin-clone-d177c",
	storageBucket: "linkedin-clone-d177c.appspot.com",
	messagingSenderId: "145153678349",
	appId: "1:145153678349:web:1a8071a8f7a8e6f65c8944",
	// measurementId: "G-YZEN33X7RJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
