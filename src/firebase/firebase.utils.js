import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication


const config = {
    apiKey: "AIzaSyDTeqNbXyd4x_LT7l-1RQ4Wc7fDwVdzaIs",
    authDomain: "crown-db-19c2b.firebaseapp.com",
    projectId: "crown-db-19c2b",
    storageBucket: "crown-db-19c2b.appspot.com",
    messagingSenderId: "818344434863",
    appId: "1:818344434863:web:19d67a4e25d78529bb885a",
    measurementId: "G-VVWS5WTQKD"
  };

// Initializes the App
firebase.initializeApp(config)

// Assigning your firebase authentication library
export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()


//create doc inside firestore by capturing user object from auth lib
export const createUserProfileDocument = async (user, displayName) => {
    if(!user) return

    const userRef = firestore.doc(`/users/${user.uid}`)

    const snapShot = await userRef.get()
    console.log(snapShot)
    if(!snapShot.exists){
        const {email} = user
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt
            })
        } catch(error){
            console.log("Error ", error.message)
        }
    }
    return userRef
}




// const createUserProfileDocument = (userAuth, additionalData) => {
//     const userRef = firestore.doc(`users/BTgGSmob7Zq0NqlUpPRX`)
//     const snapshot = await 
//     console.log(userRef)
// }




// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase