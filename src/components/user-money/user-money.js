import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks';

const UserMoney = ({ className }) => {
  const auth = useAuth();
  const money = useSelector((state) => state.user.money);

  if (!auth.getAccessToken()) {
    return (
      <div className={className}>
        $0.00
      </div>
    );
  }

  return (
    <div className={className}>
      ${ money } 
    </div>
  );
};

UserMoney.propTypes = {
  className: PropTypes.string,
};

export default UserMoney;

