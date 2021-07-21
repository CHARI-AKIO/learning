import firebase from 'firebase';

if(firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyDu2Y59BA1E-UwuJVkofBVmOjc7aHIQChk",
          authDomain: "learn-nuxt-c81f5.firebaseapp.com",
          projectId: "learn-nuxt-c81f5",
          storageBucket: "learn-nuxt-c81f5.appspot.com",
          messagingSenderId: "916176309698",
          appId: "1:916176309698:web:4d7ae47c5ede0fa5255a5b",
          measurementId: "G-10FYYP5V4V"
    })
}

export default firebase