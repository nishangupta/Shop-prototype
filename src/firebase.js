import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyAWdi1vUAKkH-9sGUS8Ve8kh5tD7Tk0_hw',
  authDomain: 'instaclone-a1e1f.firebaseapp.com',
  databaseURL: 'https://instaclone-a1e1f.firebaseio.com',
  projectId: 'instaclone-a1e1f',
  storageBucket: 'instaclone-a1e1f.appspot.com',
  messagingSenderId: '1045185608503',
  appId: '1:1045185608503:web:ee89bb9755772451c9f8b2',
  measurementId: 'G-HP4VTZBQR7',
})

export const db = firebase.firestore()
export const auth = firebase.auth()

// export const signinWithEmail = () => {
//   auth.signInWithEmailAndPassword(email, password).then(
//     (user) => user,
//     (err) => err.message
//   )
// }

export default firebase
