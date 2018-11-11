import React, { Component } from 'react';
import AuthProvider from './Authentication/AuthProvider';

import { signOut } from './Authentication/firebaseAuth';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <header>
          <button onClick={signOut}>Sign out</button>
        </header>
        <code>TODO: Implement App</code>
      </AuthProvider>
    );
  }
}

export default App;
