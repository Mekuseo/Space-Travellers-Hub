import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchmission = createAsyncThunk('mission/fetchmission', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const { data } = response;
  return data;
});
const initialState = {
  mission: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => (
    builder.addCase(fetchmission.fulfilled, (state, action) => {
      const newdata = action.payload;
      return {
        mission: newdata.map((data) => (
          {
            id: data.mission_id,
            name: data.mission_name,
            description: data.description,
            member: false,
            link: data.website,
          }
        )),
      };
    })
  ),
});

export default missionSlice.reducer;
