import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {},
});

export default buttonSlice.reducer;
