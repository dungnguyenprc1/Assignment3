import {configureStore, combineReducers} from '@reduxjs/toolkit';
import buttonSlice from './slice/buttonSlice';

const rootReducer = combineReducers({
  button: buttonSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
