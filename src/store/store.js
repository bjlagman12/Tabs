import { createStore } from 'redux';
import allReducer from '../reducers/index.js';

const initialState = {
  products: [{ name: 'Brian' }, { name: 'Nicole' }],
  user: 'Michael'
};

const store = createStore(
  allReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
