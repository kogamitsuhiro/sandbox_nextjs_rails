import '../styles/globals.scss';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
