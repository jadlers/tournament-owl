import { auth } from '../firebase';

function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

function signOut() {
  return auth.signOut();
}

function subscribeAuthChange(callback) {
  return auth.onAuthStateChanged(callback);
}

function resetPassword(email) {
  const actionCodeSettings = {
    url: 'https://tournleague-owl.firebaseapp.com/',
  };

  return auth.sendPasswordResetEmail(email, actionCodeSettings);
}

export { signIn, signOut, resetPassword, subscribeAuthChange };
