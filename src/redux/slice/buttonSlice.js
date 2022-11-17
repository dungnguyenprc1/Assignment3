import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isBorder: 'false',
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    SET_BUTTON: (state, {payload}) => {
      const {name, values} = payload;
      state[name] = values;
    },
  },
});
export const {SET_BUTTON} = buttonSlice.actions;

export const getInitialButton = state => state.button;

export default buttonSlice.reducer;
