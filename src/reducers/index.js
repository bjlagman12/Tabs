import { combineReducers } from 'redux'
import listReducer from './listReducer'
import loginReducer from './loginReducer'
import userReducer from './userReducer'

let allReducers = combineReducers({
  userList: listReducer,
  user: loginReducer,
  pay: userReducer

})

export default allReducers

