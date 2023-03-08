import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './Rockets/RocketSlice';

const store = configureStore({
  reducer: {
    Rocket: rocketSlice,
  },
});

export default store;
