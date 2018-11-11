import firebase from '@firebase/app';
import '@firebase/auth';

const config = {
  apiKey: 'AIzaSyDvZIugPTDRdpHHPbqJzMpMBGQLchVw9uM',
  authDomain: 'tournleague-owl.firebaseapp.com',
  databaseURL: 'https://tournleague-owl.firebaseio.com',
  projectId: 'tournleague-owl',
  storageBucket: 'tournleague-owl.appspot.com',
  messagingSenderId: '1094130899621',
};

firebase.initializeApp(config);

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function signOut() {
  return firebase.auth().signOut();
}

function subscribeAuthChange(callback) {
  return firebase.auth().onAuthStateChanged(callback);
}

export { signIn, signOut, subscribeAuthChange };
