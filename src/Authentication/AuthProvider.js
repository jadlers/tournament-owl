import React from 'react';
import LoginPage from '../pages/login';
import { signIn as firebaseSignIn, subscribeAuthChange } from './firebaseAuth';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { user: null, firstAuth: true, error: null };

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
      this.setState({ user: res.user });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { user, firstAuth, error } = this.state;
    const { children } = this.props;

    return firstAuth ? null : user ? (
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) : (
      <LoginPage error={error} signIn={this.signIn} />
    );
  }
}

export default AuthProvider;
