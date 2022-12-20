import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from '../components/layouts/basic';

export default function Index() {
  const { user } = useUser();
  if (user) {
    return <Layout>Welcome {user.name}!</Layout>;
  } else {
    return <Layout>Please login</Layout>;
  }
}
