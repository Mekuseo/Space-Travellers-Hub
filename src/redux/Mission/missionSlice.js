import { createSlice } from '@reduxjs/toolkit';

const initialState = { lists: ['tobby', 'dolapo', 'michael', 'timi', 'ayomide'] };

const missionSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addlists: (state, action) => {
      state.lists.push(action.payload);
    },
  },
});

export default missionSlice.reducer;
export const { addlists } = missionSlice.actions;
