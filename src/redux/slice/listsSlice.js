import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listItems: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    ADD_LISTS: (state, {payload}) => {
      console.log(payload);
    },
  },
});

export const ADD_LISTS = listsSlice.actions;
export default listsSlice.reducer;
