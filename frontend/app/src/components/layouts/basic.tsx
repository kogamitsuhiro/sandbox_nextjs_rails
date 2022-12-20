import Head from 'next/head';
import React from 'react';

import Header from '../header';

const Layout = ({ children }: React.PropsWithChildren<unknown>): React.ReactElement => (
  <>
    <Head>
      <title>Next.js with Auth0</title>
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <main>
      <div className='container'>{children}</div>
    </main>
  </>
);

export default Layout;
