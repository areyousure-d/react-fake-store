import React from 'react';

import styles from './contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2>Фейковые контакты</h2>
      <p>Наш фейковый емеил: contacts@fakestore.fake</p>
      <p>Наш фейковый телефон: +123456789</p>
    </div>    
  );
};

export default Contacts;

