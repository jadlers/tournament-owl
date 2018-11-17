import React from 'react';
import LoginPage from '../pages/login';
import { signIn as firebaseSignIn, subscribeAuthChange } from './firebaseAuth';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { user: null, firstAuth: true };

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

  handleSubmit = (email, password) => {
    firebaseSignIn(email, password)
      .then(res => this.setState({ user: res.user }))
      .catch(err => console.log('Oh no...', err));
  };

  render() {
    const { user, firstAuth } = this.state;
    const { children } = this.props;

    return firstAuth ? null : user ? (
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) : (
      <LoginPage submit={this.handleSubmit} />
    );
  }
}

export default AuthProvider;
