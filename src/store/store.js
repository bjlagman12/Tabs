import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import allReducer from '../reducers/index.js';
import sampleData from '../../data/sampleData'

const initialState = {
  userList: sampleData,
  user: sampleData[0],
  pay: sampleData[1],
  amount: 0
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
