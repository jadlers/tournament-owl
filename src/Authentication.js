import React from 'react';

const AuthContext = React.createContext();

class Authentication extends React.Component {
  state = { user: null };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return user ? (
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) : (
      <div> You need to sign in first </div>
    );
  }
}

export default Authentication;
