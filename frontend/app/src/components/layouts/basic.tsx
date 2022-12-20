import Head from 'next/head';
import React from 'react';

import Footer from '../footer';
import Header from '../header';

const Layout = ({ children }: React.PropsWithChildren<unknown>): React.ReactElement => (
  <>
    <Head>
      <title>Next.js with Auth0</title>
      <meta charSet='utf-8' />
    </Head>
    <div className='wrapper'>
      <Header />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
