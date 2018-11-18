import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyDvZIugPTDRdpHHPbqJzMpMBGQLchVw9uM',
  authDomain: 'tournleague-owl.firebaseapp.com',
  databaseURL: 'https://tournleague-owl.firebaseio.com',
  projectId: 'tournleague-owl',
  storageBucket: 'tournleague-owl.appspot.com',
  messagingSenderId: '1094130899621',
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
});

const auth = firebase.auth();

export { auth, db };
