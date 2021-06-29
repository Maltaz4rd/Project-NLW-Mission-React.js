import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCTimArZMCeYG2Xd8jJsQ56NP9XSAJmrNQ",
    authDomain: "letmeask-mission-react.firebaseapp.com",
    databaseURL: "https://letmeask-mission-react-default-rtdb.firebaseio.com",
    projectId: "letmeask-mission-react",
    storageBucket: "letmeask-mission-react.appspot.com",
    messagingSenderId: "843424219362",
    appId: "1:843424219362:web:e18e0977109835e8359ebb"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const adatabase = firebase.database()