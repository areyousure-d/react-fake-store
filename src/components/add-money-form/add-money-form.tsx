import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setUserMoney } from "../../redux/actions";

import styles from "./add-money-form.module.css";

type AddMoneyFormType = {
  money: number;
  hideFormHandler: Function;
};

const AddMoneyForm: FC<AddMoneyFormType> = ({
  money,
  hideFormHandler,
}: AddMoneyFormType) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: { money: string }) => {
    const newMoney = Number(data.money);
    dispatch(setUserMoney(newMoney));
    hideFormHandler();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.addMoneyForm}>
      <input
        className={styles.money}
        type="text"
        name="money"
        defaultValue={money}
        ref={register({
          pattern: /^\d+$/,
        })}
      />
      {errors && errors.money && (
        <span className={styles.errorMessage}>Только числа</span>
      )}
      <input className={styles.submit} type="submit" value="Сохранить" />
    </form>
  );
};

export default AddMoneyForm;
