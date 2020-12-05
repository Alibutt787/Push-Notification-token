import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyD0lX-nCDyJyoX57ler8KE_wadj-uxethU",
  authDomain: "ali-bhatt.firebaseapp.com",
  projectId: "ali-bhatt",
  storageBucket: "ali-bhatt.appspot.com",
  messagingSenderId: "516452485604",
  appId: "1:516452485604:web:3a788e44a809e0b5229ff1"
};

firebase.initializeApp(firebaseConfig);

firebase.messaging();

export default firebase;