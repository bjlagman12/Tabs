import { combineReducers } from 'redux'
import productReducer from './productReducer'
import userReducer from './userReducer'

let allReducers = combineReducers({
  products: productReducer,
  user: userReducer
})

export default allReducers

