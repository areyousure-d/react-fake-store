import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../hooks';

import styles from './user-details.module.css';

const UserDetails = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const history = useHistory();

  const email = auth.user.user.email;

  const signoutHandler = (e) => {
    e.preventDefault();
    auth.signout();
    history.push("/");
  };
  
  return (
    <div className={styles.userDetails}>

      <div className={styles.email}>
        <div>
          Ваш email: { email }
        </div>
        <div className={styles.signout}>
          <button type="button" onClick={signoutHandler}>
            Выйти
          </button> 
        </div>
      </div>

    </div>
  );
};

export default UserDetails;

