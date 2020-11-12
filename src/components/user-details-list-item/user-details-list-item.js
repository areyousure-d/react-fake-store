import React from 'react';

import styles from './user-details-list-item.module.css';

const UserDetailsListItem = ({ item }) => {
  return (
    <div className={styles.userDetailsListItem}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p>{ item.title }</p>
        <p>Количество: { item.count }</p>
      </div>
    </div>
  );
};

export default UserDetailsListItem;

