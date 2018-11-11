import React, { Component } from 'react';
import Auth from './Authentication';

import { signOut } from './firebase';

class App extends Component {
  render() {
    return (
      <>
        <Auth>
          <header>
            <button onClick={signOut}>Sign out</button>
          </header>
          <code>TODO: Implement App</code>
        </Auth>
      </>
    );
  }
}

export default App;
