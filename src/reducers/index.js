import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import speechReducer from './speech';

const reducer = combineReducers({
  speech: speechReducer,
  routing: routerReducer
});

export default reducer;
