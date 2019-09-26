import  { AMOUNT_USER } from '../actions/index'

const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case AMOUNT_USER:
      return action.amount 
    default:
      return state
  }
};

export default amountReducer
