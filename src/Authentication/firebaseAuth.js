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

function resetPassword(email) {
  const actionCodeSettings = {
    url: 'https://tournleague-owl.firebaseapp.com/',
  };

  return firebase.auth().sendPasswordResetEmail(email, actionCodeSettings);
}

export { signIn, signOut, resetPassword, subscribeAuthChange };
