import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from '../../config/logger-middleware';


import authReducer from '../../modulo/auth/auth.reducer';

const middleware = [thunk, loggerMiddleware];


const reducer = combineReducers({
  authReducer,
});

const store = configureStore({
  reducer,
  middleware,
});

export default store;