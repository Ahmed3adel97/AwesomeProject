import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBymjrxKdkwHQbRJqsmupFKTY0wl_IKb7M",
    authDomain: "react-native-tut-210a7.firebaseapp.com",
    projectId: "react-native-tut-210a7",
    storageBucket: "react-native-tut-210a7.appspot.com",
    messagingSenderId: "332720558576",
    appId: "1:332720558576:web:679a217a25af6c45fd0d35"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default app;