import { useAuth0 } from '@auth0/auth0-react';

import Layout from '../components/layouts/basic';

export default function Index() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Layout>
      <h1>Homeページ</h1>
      <div>
        <p>Welcome {isAuthenticated ? user.name : 'ゲスト'}!</p>
        <p>hoge</p>
      </div>
    </Layout>
  );
}
