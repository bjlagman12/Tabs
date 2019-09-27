export const PAY_USER = 'payUser';

export const updateUser = newUser => {
  return {
    type: PAY_USER,
    user: newUser
  };
};

export const AMOUNT_USER = 'changeAmount';

export const updateAmount = num => {
  return {
    type: AMOUNT_USER,
    amount: num
  };
};

export const TRANSFER_AMOUNT = 'changeAmount';
import sendFunds from '../apiRoute/api';

export const transferAmount = (userName, funds) => {
  let obj = {
    payUser: userName,
    money: funds
  };
  return () => {
    sendFunds(obj, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // return { type: 'VIDEO' };
      }
    });
  };
};
