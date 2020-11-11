import React from 'react';
import clsx from 'clsx';

import Container from '../container';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div 
      className={clsx(styles.footer)}
    >
      <Container>

        <div>
          FakeStore, 2020  
        </div>

      </Container>
    </div>
  );
};

export default Footer;

