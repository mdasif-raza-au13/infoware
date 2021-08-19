import firebase from'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
        apiKey: "AIzaSyBKdqhKrYrbhKoN4VJscDNVCOC2bW7iXGA",
        authDomain: "infowareproj.firebaseapp.com",
        projectId: "infowareproj",
        storageBucket: "infowareproj.appspot.com",
        messagingSenderId: "385595166870",
        appId: "1:385595166870:web:eb8a04b9958a066f36b2b7"
})

export const auth = app.auth()
export default app