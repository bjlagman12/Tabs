import { PAY_USER } from '../actions/index'

const userReducer = (state = '', action) => {
  switch (action.type) {
    case PAY_USER:
      return action.user
    default:
      return state
  }
};

export default userReducer
