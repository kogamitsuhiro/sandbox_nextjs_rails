import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import Layout from '../components/layouts/basic';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Layout>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Layout>
    )
  );
};

export default Profile;
