import firebase from 'firebase/app'
import "firebase/auth" 
import { getAuth } from 'firebase/auth'
// import { initializeApp } from 'firebase/app'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
})

export const auth = getAuth(app)
export default app