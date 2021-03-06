import React, { FC } from "react";
import { useSelector } from "react-redux";

import UserDetailsListItem from "../user-details-list-item";

import styles from "./user-details-list.module.css";

import { RootStateType } from "../../redux/reducers";

const UserDetailsList: FC = () => {
  const purchasedItems = useSelector(
    (state: RootStateType) => state.user.purchasedItems
  );

  const list = purchasedItems.map((item) => {
    return <UserDetailsListItem key={item.id} item={item} />;
  });

  return (
    <div className={styles.userDetailsList}>
      <p className={styles.title}>Ваши покупки</p>
      {list}
    </div>
  );
};

export default UserDetailsList;
