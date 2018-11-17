import React from 'react';
import LoginPage from '../pages/login';
import {
  signIn as firebaseSignIn,
  resetPassword as firebaseResetPassword,
  subscribeAuthChange,
} from './firebaseAuth';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { user: null, firstAuth: true, error: null, message: '' };

  componentDidMount() {
    this.unsubscribeAuthChange = subscribeAuthChange(user => {
      if (user) {
        this.setState({ user, firstAuth: false });
      } else {
        this.setState({ user: null, firstAuth: false });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuthChange();
  }

  signIn = async (email, password) => {
    try {
      const res = await firebaseSignIn(email, password);
      this.setState({ user: res.user, error: null, message: '' });
    } catch (error) {
      this.setState({ error });
    }
  };

  resetPassword = async email => {
    try {
      await firebaseResetPassword(email);
      this.setState({
        message: `An email has been sent to ${email} with instructions on how to reset your password. The email subject will include "TournLeague Owl". It could end up in spam so check there as well.`,
        error: null,
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { user, firstAuth, error, message } = this.state;
    const { children } = this.props;

    return firstAuth ? null : user ? (
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) : (
      <LoginPage
        message={message}
        error={error}
        resetPassword={this.resetPassword}
        signIn={this.signIn}
      />
    );
  }
}

export default AuthProvider;
