import React from 'react';
import { Redirect } from '@reach/router';
import { Error } from '../../styled/components';

import { getCurrentUser } from '../../Authentication/firebaseAuth';
import { db } from '../../firebase';

class User extends React.Component {
  state = { fetching: true, user: null };

  async componentDidMount() {
    const userRef = db.collection('users').doc(this.props.uid);
    const userDoc = await userRef.get();
    if (userDoc.exists) {
      this.setState({ user: userDoc.data(), fetching: false });
    } else {
      this.setState({ fetching: false });
    }
  }

  render() {
    const { fetching, user } = this.state;

    return fetching ? (
      <div>Loading...</div>
    ) : !this.state.user ? (
      <Error>{`No user with id ${this.props.uid}`}</Error>
    ) : (
      <div>
        <h1>Here's the profile</h1>
        {user.username && <h2>{`Username: ${user.username}`}</h2>}
      </div>
    );
  }
}

const CurrentUser = () => (
  <Redirect to={`/user/${getCurrentUser().uid}`} noThrow />
);

export default User;
export { CurrentUser };
