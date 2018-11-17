import React from 'react';
import SignInForm from './SignInForm';
import { Error } from '../../styled/components';

const getErrorMessage = error => {
  switch (error.code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password';
    case 'auth/invalid-email':
      return 'Email address entered is not valid';
    case 'auth/too-many-requests':
      return 'Too many unsuccessful login attempts, try again later.';
    default:
      console.log(error);
      return 'Unknown error';
  }
};

const LoginPage = ({ error, signIn }) => (
  <>
    {error && <Error>{getErrorMessage(error)}</Error>}
    <SignInForm signIn={signIn} />
  </>
);

export default LoginPage;
