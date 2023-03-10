import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './Rockets/RocketSlice';
import missionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    Rocket: RocketSlice,
    Mission: missionReducer,
  },
});

export default store;
