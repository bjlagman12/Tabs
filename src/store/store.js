import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


// var initialState = {
//   currentVideo: exampleData[0],
//   videoList: exampleData
// };

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store;