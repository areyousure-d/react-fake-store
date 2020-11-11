import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { useAuth } from '../../../hooks';
import { 
  userSignupRequested,
  userSignupSuccess,
  userSignupError,
} from '../../../redux/actions';

import styles from './signup.module.css';

const Signup = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.user);
  const auth = useAuth();

  const { register, handleSubmit, watch, errors } = useForm();

  const onSignup = (data) => {
    const { email, pass } = data; 
    dispatch(userSignupRequested());
    auth.signup(email, pass)
      .then(() => dispatch(userSignupSuccess(auth.user.user.email)))
      .catch((err) => dispatch(userSignupError(err.message)));
  };

  if (auth.getAccessToken()) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSignup)} 
      className={styles.signup}
    >
      <h2 className={styles.title}>Регистрация</h2>
      { error && <p>{ error }</p>}
      { loading && <p>Регистрация...</p> }

      <div className={styles.inputs}>
        <input 
          name="email" 
          type="email" 
          placeholder="Электронная почта" 
          className={styles.email}
          ref={register} 
        />
        <input 
          name="pass" 
          type="password" 
          placeholder="Пароль" 
          className={styles.password}
          ref={register} 
        />
        <input 
          name="passConfirm" 
          type="password" 
          placeholder="Пароль" 
          className={styles.passwordConfirm}
          ref={register} 
        />
        <input type="submit" value="Регистрация" className={styles.button} />
      </div>
      
      <Link to="/signin">Войти</Link>
    </form>
  );
};

export default Signup;

