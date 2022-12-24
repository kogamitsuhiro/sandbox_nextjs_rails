import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

const Header = (): React.ReactElement => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
          {isAuthenticated ? (
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
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  data-testid='logout'
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()} data-testid='login'>
                Log In
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
