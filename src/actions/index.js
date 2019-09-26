export const UPDATE_USER = 'updateUser';

export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};
