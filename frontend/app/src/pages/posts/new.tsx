import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import React from 'react';

import Layout from '../../components/layouts/basic';

export default withPageAuthRequired(function New({}) {
  return (
    <Layout>
      <h1>新規投稿</h1>
    </Layout>
  );
});
