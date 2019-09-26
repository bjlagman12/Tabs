import { createStore } from 'redux';
import allReducer from '../reducers/index.js';
import sampleData from '../../data/sampleData'

const initialState = {
  userList: sampleData,
  user: sampleData[0],
  pay: sampleData[1]
};

const store = createStore(
  allReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
