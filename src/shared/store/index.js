import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from '../../config/logger-middleware';


import authReducer from '../../modulo/auth/auth.reducer';
import chatReducer from '../../modulo/channels/ChatComponent/chat.Reducer'
import slideBarReducer from '../../modulo/channels/SlideBar/slideBar.reducer'
const middleware = [thunk, loggerMiddleware];


const reducer = combineReducers({
  authReducer,
  chatReducer,
  slideBarReducer
});

const store = configureStore({
  reducer,
  middleware
});

export default store;