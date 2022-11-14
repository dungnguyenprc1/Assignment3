import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  text: '',
  textColor: '',
  backGroundColor: '',
  buttonWidth: 'auto',
  buttonHeight: 'auto',
  isBorder: 'false',
  borderType: 'solid',
  borderWidth: 0,
  borderRadius: 0,
  borderColor: '',
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

export default buttonSlice.reducer;
