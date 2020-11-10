import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const UserMoney = ({ className }) => {
  const money = useSelector((state) => state.user.money);

  return (
    <div className={className}>
      ${ money}
    </div>
  );
};

UserMoney.propTypes = {
  className: PropTypes.string,
};

export default UserMoney;

