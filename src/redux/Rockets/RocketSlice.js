import { createSlice } from '@reduxjs/toolkit';

const initialState = { rockets: ['tobby', 'dolapo', 'michael', 'timi', 'ayomide'] };

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
  },
});

export default rocketSlice.reducer;
