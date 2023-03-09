import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchmission = createAsyncThunk('missions/fetchmission', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const { data } = response;
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
        reserved: false,
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
        reserved: false,
      };
      const updatedMissions = [...state.missions];
      updatedMissions[missionIndex] = updatedMission;
      return {
        ...state,
        missions: updatedMissions,
      };
    },
    reserveMission: (state, action) => {
      const missionIndex = state.missions.findIndex((mission) => mission.id === action.payload);
      const updatedMission = {
        ...state.missions[missionIndex],
        member: false,
        reserved: true,
      };
      const updatedMissions = [...state.missions];
      updatedMissions[missionIndex] = updatedMission;
      return {
        ...state,
        missions: updatedMissions,
      };
    },
    cancelReservation: (state, action) => {
      const missionIndex = state.missions.findIndex((mission) => mission.id === action.payload);
      const updatedMission = {
        ...state.missions[missionIndex],
        member: false,
        reserved: false,
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
        reserved: false,
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
