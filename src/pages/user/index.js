import React from 'react';

import { Redirect } from '@reach/router';
import { getCurrentUser } from '../../Authentication/firebaseAuth';

const User = ({ uid }) => {
  if (!uid) {
    return <Redirect noThrow to={`user/${getCurrentUser().uid}`} />;
  }

  return (
    <div>
      <h1>{'User with uid:'}</h1>
      <h2>{uid}</h2>
    </div>
  );
};
const CurrentUser = () => (
  <Redirect to={`/user/${getCurrentUser().uid}`} noThrow />
);

export default User;
export { CurrentUser };
