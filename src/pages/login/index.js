import React from 'react';
import SignInForm from './SignInForm';

class LoginPage extends React.Component {
  render() {
    const { submit } = this.props;

    return (
      <div>
        <SignInForm submit={submit} />
      </div>
    );
  }
}

export default LoginPage;
