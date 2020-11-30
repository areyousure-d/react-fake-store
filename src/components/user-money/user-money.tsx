import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks";

import { RootStateType } from "../../redux/reducers";

type UserMoneyType = {
  className?: string;
};

const UserMoney: FC<UserMoneyType> = ({ className }) => {
  const auth = useAuth();
  const money = useSelector((state: RootStateType) => state.user.money);

  if (!auth.getAccessToken()) {
    return <div className={className}>$0.00</div>;
  }

  return <div className={className}>${money}</div>;
};

export default UserMoney;
