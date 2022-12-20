import React from 'react';

import styles from './footer.module.scss';

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <a href='https://github.com/kogamitsuhiro' target='_blank' rel='noreferrer'>
        Footer
      </a>
    </footer>
  );
};

export default Footer;
