import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Provider is harnessing 'context' from React
import thunk from 'redux-thunk'
//the only point of redux-thunk is for organization - you can have async redux without it

import rootReducer from './redux/reducers/combineReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
// store is Redux single source of truth - only 1 store - avail to all children (if they need it)
// never access the store directly - store is read-only
// components will never access directly, they'll use 'connect' to access this store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </ Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// WHERE STORE COMES FROM IN REACT (although we inherit it from REDUX):
// function createStore(reducer) {
//   let state = reducer( undefined, {type: "default"})
//   return {
//     dispatch: function(action){ state = reducer(state, action)},
//     getState: function(){ state }
//   }
// }

// Redux store includes both STATE & DISPATCH
// dispatch is the function that is going to CHANGE STATE