import React from 'react';
import { Redirect } from '@reach/router';
import { Link } from '@reach/router';
import { Error } from '../../styled/components';

import { getCurrentUser } from '../../Authentication/firebaseAuth';
import { db } from '../../firebase';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, user: null };
    this.fetchUser(props.uid);
  }

  componentDidUpdate(prevProps) {
    const { uid } = this.props;
    if (uid !== prevProps.uid) this.fetchUser(uid);
  }

  fetchUser = async uid => {
    console.log('fetching user');
    const userRef = db.collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (userDoc.exists) {
      this.setState({ user: userDoc.data(), fetching: false });
    } else {
      this.setState({ fetching: false });
    }
  };

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
        {user.friends && (
          <ul>
            {Object.keys(user.friends).map(friend => (
              <li key={friend}>
                <Link to={`../${user.friends[friend]}`}>{friend}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const CurrentUser = () => (
  <Redirect to={`/user/${getCurrentUser().uid}`} noThrow />
);

export default User;
export { CurrentUser };
