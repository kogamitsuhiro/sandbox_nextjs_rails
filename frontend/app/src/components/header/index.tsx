import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

const Header = (): React.ReactElement => {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href='/profile'>
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <Link href='/posts'>
                  <a>Posts</a>
                </Link>
              </li>
              <li>
                <Link href='/api/auth/logout' data-testid='logout'>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href='/api/auth/login' data-testid='login'>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
