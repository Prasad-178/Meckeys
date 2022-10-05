import firebase from 'firebase/app'
import "firebase/auth" 
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

export const firebaseConfig = {
    apiKey: "AIzaSyCnCb19MsUZg-fVPZ5kOq2DHy_LkNcDE2M",
    authDomain: "meckeys-dev.firebaseapp.com",
    projectId: "meckeys-dev",
    storageBucket: "meckeys-dev.appspot.com",
    messagingSenderId: "975542172158",
    appId: "1:975542172158:web:4106676b97050a560e28af"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
