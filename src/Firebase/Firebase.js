import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5CfLx0YKv5UvsTweCEq9yhsIko_mLRUs",
    authDomain: "crud-react-640a6.firebaseapp.com",
    projectId: "crud-react-640a6",
    storageBucket: "crud-react-640a6.appspot.com",
    messagingSenderId: "878110392408",
    appId: "1:878110392408:web:40a4ecc4f0c127be9a8a2d"
  };
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db, auth}