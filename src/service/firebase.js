import firebase from "firebase/compat/app";
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BASKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID
};

const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()