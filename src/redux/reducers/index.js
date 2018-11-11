import { combineReducers } from 'redux';

// Reducers
import state from './state-reducer';
import rover from './rover-reducer.js';

const combinedReducers = combineReducers({ state, rover });
  
export default combinedReducers;