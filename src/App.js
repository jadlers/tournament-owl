import React, { Component } from 'react';
import { Router } from '@reach/router';

import AuthProvider from './Authentication/AuthProvider';
import Home from './pages/home';
import User from './pages/user';

import { signOut } from './Authentication/firebaseAuth';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <header>
          <button onClick={signOut}>Sign out</button>
        </header>
        <Router>
          <Home path="/" />
          <User path="user" />
          <User path="user/:uid" />
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
