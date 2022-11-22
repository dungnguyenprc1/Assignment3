import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  text: 'I am a button',
  isBorder: 'false',
  textColor: '#FFF',
  backgroundColor: '#CB2E2E',
  buttonHeight: '56',
  borderType: 'solid',
  borderColor: '#000000',
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    SET_BUTTON: (state, {payload}) => {
      const {name, values} = payload;
      console.log('payload', payload);
      state[name] = values;
    },
    handleReset: () => {
      return initialState;
    },
  },
});
export const {SET_BUTTON, handleReset} = buttonSlice.actions;

export const getInitialButton = state => state.button;

export default buttonSlice.reducer;
