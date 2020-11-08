import React from 'react';
import clsx from 'clsx';

import styles from './container.module.css';

const Container = (props) => {
  return (
    <div className={clsx(styles.container, props.className)}>
      { props.children }
    </div>
  );
};

export default Container;

