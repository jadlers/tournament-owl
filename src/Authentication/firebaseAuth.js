import firebase from '../firebase';

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
