import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../../hooks";
import { clearCart } from "../../../redux/actions";
import { RootStateType } from "../../../redux/reducers";
import AddMoneyForm from "../../add-money-form";
import UserDetailsList from "../../user-details-list";

import styles from "./user-details.module.css";

const UserDetails: FC = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);

  const money = useSelector((state: RootStateType) => state.user.money);
  const email = auth.user.user.email ? auth.user.user.email : "";

  const signoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth.signout();
    dispatch(clearCart());
    history.push("/");
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className={styles.userDetails}>
      <div className={styles.email}>
        <div>Вы вошли как: {email}</div>
        <button
          className={styles.signout}
          type="button"
          onClick={signoutHandler}
        >
          Выйти
        </button>
      </div>

      <div className={styles.balance}>
        <div className={styles.currentMoney}>Ваш баланс: ${money}</div>

        {showForm ? (
          <AddMoneyForm money={money} hideFormHandler={hideFormHandler} />
        ) : (
          <button className={styles.balanceBtn} onClick={showFormHandler}>
            Пополнить
          </button>
        )}
      </div>

      <UserDetailsList />
    </div>
  );
};

export default UserDetails;
