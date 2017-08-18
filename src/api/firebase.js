import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBzdbJ4xMsX17zBmYFV_ZKkB7pJXZB9h6E",
    authDomain: "destinos-4ca98.firebaseapp.com",
    databaseURL: "https://destinos-4ca98.firebaseio.com",
    projectId: "destinos-4ca98",
    storageBucket: "destinos-4ca98.appspot.com",
    messagingSenderId: "557077459918"
});

export const db = firebaseApp.database();
