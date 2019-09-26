export const PAY_USER = 'updateUser';

export const updateUser = newUser => {
  console.log(newUser, 'newuser')
  return {
    type: PAY_USER,
    user: newUser
  };
};
