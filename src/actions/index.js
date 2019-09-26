export const PAY_USER = 'payUser';

export const updateUser = newUser => {
  return {
    type: PAY_USER,
    user: newUser
  };
};

export const AMOUNT_USER = 'changeAmount'

export const updateAmount = num => {
  return {
    type: AMOUNT_USER,
    amount: num
  };
};

export const TRANSFER_AMOUNT = 'changeAmount'

export const transferAmount = funds => {

  console.log(funds, 'this is the amounts from fund')
  return {
    type: TRANSFER_AMOUNT,
    amount: funds
  };
};
