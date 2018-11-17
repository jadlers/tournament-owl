import React from 'react';
import styled from '@emotion/styled/macro';

import SignInForm from './SignInForm';
import { Error } from '../../styled/components';
import { queries } from '../../styled/layout';

const LoginContainer = styled.div({
  marginTop: '2em',
  padding: '0 1em',
  [queries.tablet]: {
    maxWidth: '400px',
    margin: '2em auto 0',
  },
});

const InfoBox = styled.div({
  padding: '.7em .5em',
  marginBottom: '1em',
  backgroundColor: '#ccc',
  border: '2px solid #333',
  borderRadius: '.2em',
});

const getErrorMessage = error => {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'There is no user with that email registered';
    case 'auth/wrong-password':
      return 'Invalid password';
    case 'auth/invalid-email':
      return 'Email address entered is not valid';
    case 'auth/too-many-requests':
      return 'Too many unsuccessful login attempts, try again later.';
    default:
      console.log(error);
      return 'Unknown error';
  }
};

const LoginPage = ({ error, signIn, message, resetPassword }) => (
  <LoginContainer>
    {error && (
      <Error style={{ marginBottom: '2em' }}>{getErrorMessage(error)}</Error>
    )}
    {message && <InfoBox>{message}</InfoBox>}
    <SignInForm signIn={signIn} resetPassword={resetPassword} />
  </LoginContainer>
);

export default LoginPage;
