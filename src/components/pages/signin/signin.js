import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../../hooks';
import { 
  userSigninRequested,
  userSigninSuccess,
  userSigninError,
} from '../../../redux/actions';

import styles from './signin.module.css';

const Signin = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const auth = useAuth();

  const { register, handleSubmit, errors } = useForm();

  const onSignin = (data) => {
    dispatch(userSigninRequested());
    const { email, pass } = data;
    auth.signin(email, pass)
      .then(() => dispatch(userSigninSuccess(auth.user.user.email)))
      .catch((err) => dispatch(userSigninError(err.message)));
  };

  if (auth.getAccessToken()) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSignin)}>
      <h2>Войти</h2>
      { error && <p>{ error }</p> }
      { loading && <p>Вход...</p>}
      <input 
        name="email"
        type="email"
        placeholder="Электронная почта"
        ref={register}
      />
      <input 
        name="pass"
        type="password"
        placeholder="Пароль"
        ref={register}
      />
      <input type="submit" value="Войти" />
    </form>
  );
};

export default Signin;

