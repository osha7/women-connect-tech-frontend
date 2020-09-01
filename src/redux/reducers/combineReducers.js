import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
  jobsReducer,
  eventsReducer
});