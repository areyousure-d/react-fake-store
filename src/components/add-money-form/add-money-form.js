import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setUserMoney } from '../../redux/actions';

import styles from './add-money-form.module.css';

const AddMoneyForm = ({ money, hideFormHandler }) => {
  const dispatch = useDispatch();
  const {register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const money = Number(data.money);
    dispatch(setUserMoney(money));
    hideFormHandler();
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className={styles.addMoneyForm}
    >
      <input 
        className={styles.money} 
        type="text" 
        name="money" 
        defaultValue={money}
        ref={register} 
      />
      <input 
        className={styles.submit} 
        type="submit" 
        value="Сохранить" 
      />
    </form>
  );
};

export default AddMoneyForm;

