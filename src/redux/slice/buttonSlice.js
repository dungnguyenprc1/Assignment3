import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  // text: '',
  // textColor: '',
  // backGroundColor: null,
  // buttonWidth: null,
  // buttonHeight: null,
  isBorder: 'false',
  // borderType: 'solid',
  // borderWidth: null,
  // borderRadius: null,
  // borderColor: null,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    SET_BUTTON: (state, {payload}) => {
      const {name, values} = payload;
      // console.log(name, values);
      // console.log('payload', payload);
      state[name] = values;
    },
  },
});
export const {SET_BUTTON} = buttonSlice.actions;

export const getInitialButton = state => state.button;

export default buttonSlice.reducer;
