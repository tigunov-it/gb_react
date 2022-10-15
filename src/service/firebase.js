import firebase from "firebase/compat/app";
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: 'AIzaSyBl1lkpP3qAF5n8H9mWj6ahXPvr8b_Z5wY',
    authDomain: 'gb-react-a1606.firebaseapp.com',
    projectId: 'gb-react-a1606',
    storageBucket: 'gb-react-a1606.appspot.com',
    messagingSenderId: '970094220532',
    appId: '1:970094220532:web:de83f965bceef25845baa1'
};

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BASKET,
//     messagingSenderId: process.env.MESSAGE_SENDER_ID,
//     appId: process.env.APP_ID
// };

const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()