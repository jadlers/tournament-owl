// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Make sure each user has a document in the 'users' collection
exports.createAccountDocument = functions.auth.user().onCreate(user => {
  // get user data from the auth trigger
  const userUid = user.uid; // The UID of the user.
  const userEmail = user.email;

  const userInfo = {
    useruid: userUid,
    email: userEmail,
  };

  console.log(
    `Creating document for user with email: ${
      userInfo.email
    } which has the uid: ${userInfo.useruid}`
  );

  // write new doc to collection
  return admin
    .firestore()
    .collection('users')
    .doc(userUid)
    .set(userInfo);
});
