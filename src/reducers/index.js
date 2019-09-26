import { combineReducers } from 'redux'
import listReducer from './listReducer'
import loginReducer from './loginReducer'
import userReducer from './userReducer'
import amountReducer from './amountReducer'

let allReducers = combineReducers({
  userList: listReducer,
  user: loginReducer,
  pay: userReducer,
  amount: amountReducer
})

export default allReducers

