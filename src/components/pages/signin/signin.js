import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

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
      .then(() => dispatch(userSigninSuccess(email)))
      .catch((err) => dispatch(userSigninError(err.message)));
  };

  if (auth.getAccessToken()) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSignin)}
      className={styles.signin}
    >
      <h2 className={styles.title}>Войти</h2>
      { error && <p>{ error }</p> }
      { loading && <p>Вход...</p>}

      <div className={styles.inputs}>
        <input 
          name="email"
          type="email"
          placeholder="Электронная почта"
          className={styles.email}
          ref={register({
            required: true,
          })}
        />
            { errors.email && 
                <div className={styles.validationError}>
                  Емеил обязателен
                </div>
            }
        <input 
          name="pass"
          type="password"
          placeholder="Пароль"
          className={styles.password}
          ref={register({
            required: true,
          })}
        />
            { errors.pass && 
                <div className={styles.validationError}>
                  Пароль обязателен
                </div>
            }
        <input type="submit" value="Войти" className={styles.button} />
      </div>

      <Link to="/signup">Создать Аккаунт</Link>
    </form>
  );
};

export default Signin;

