import Firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyDU5sHk7bGetCrjbQbwtSrMDzxu9PNZCcY",
  authDomain: "netflix-a4f8b.firebaseapp.com",
  projectId: "netflix-a4f8b",
  storageBucket: "netflix-a4f8b.appspot.com",
  messagingSenderId: "1047266665254",
  appId: "1:1047266665254:web:18bf41883c48b74e93d7e7",
}

const firebase = Firebase.initializeApp(config)

export { firebase }
