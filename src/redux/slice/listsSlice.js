import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listItems: [],
  filtered: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    ADD_LISTS: (state, {payload}) => {
      const length = state.listItems.length;
      state.listItems.push({...payload, id: length + 1});
    },
    ADD_FILTERED: (state, {payload}) => {
      state.filtered = payload;
    },
  },
});

export const {ADD_LISTS, SEARCH_LISTS, ADD_FILTERED} = listsSlice.actions;
export const selectAllButton = state => state.lists.listItems;
export const selectAllFiltered = state => state.lists.filtered;
export default listsSlice.reducer;
