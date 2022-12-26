import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import withPageAuthRequired from '../components/auth/withPageAuthRequired';
import Layout from '../components/layouts/basic';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <Layout>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Layout>
  );
};

export default withPageAuthRequired(Profile);
