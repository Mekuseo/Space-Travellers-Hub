import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchmission = createAsyncThunk('missions/fetchmission', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = response.json();
  return data;
});

const initialState = {
  missions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionIndex = state.missions.findIndex((mission) => mission.id === action.payload);
      const updatedMission = {
        ...state.missions[missionIndex],
        member: true,
      };
      const updatedMissions = [...state.missions];
      updatedMissions[missionIndex] = updatedMission;
      return {
        ...state,
        missions: updatedMissions,
      };
    },
    leaveMission: (state, action) => {
      const missionIndex = state.missions.findIndex((mission) => mission.id === action.payload);
      const updatedMission = {
        ...state.missions[missionIndex],
        member: false,
      };
      const updatedMissions = [...state.missions];
      updatedMissions[missionIndex] = updatedMission;
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchmission.fulfilled, (state, action) => {
      const newMissions = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        member: false,
      }));
      return {
        ...state,
        missions: newMissions,
      };
    });
  },
});

export const {
  joinMission, leaveMission, reserveMission, cancelReservation,
} = missionSlice.actions;
export default missionSlice.reducer;
