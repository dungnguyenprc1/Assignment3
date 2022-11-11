import {configureStore, combineReducers} from '@reduxjs/toolkit';
import buttonSlice from './slice/buttonSlice';
import listsSlice from './slice/listsSlice';

const rootReducer = combineReducers({
  button: buttonSlice,
  lists: listsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
