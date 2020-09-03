import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import eventsReducer from './eventsReducer';
import usersReducer from './usersReducer'

export default combineReducers({
  jobsReducer,
  eventsReducer,
  usersReducer
});