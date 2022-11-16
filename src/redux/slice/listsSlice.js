import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listItems: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    ADD_LISTS: (state, {payload}) => {
      const length = state.listItems.length;
      const tempList = {...payload, id: length + 1};
      state.listItems.push(tempList);
    },
  },
});

export const {ADD_LISTS, SEARCH_LISTS} = listsSlice.actions;
export const selectAllButton = state => state.lists.listItems;
export default listsSlice.reducer;
