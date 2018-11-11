import React from 'react';
import SignInForm from './components/SignInForm.js';
import { signIn as firebaseSignIn, subscribeAuthChange } from './firebase';

const AuthContext = React.createContext();

class Authentication extends React.Component {
  state = { user: null };

  componentDidMount() {
    this.unsubscribeAuthChange = subscribeAuthChange(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
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
    const { user } = this.state;
    const { children } = this.props;

    return user ? (
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) : (
      <div>
        <p> You need to sign in</p>
        <SignInForm submit={this.handleSubmit} />
      </div>
    );
  }
}

export default Authentication;
