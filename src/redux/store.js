import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './Rockets/RocketSlice';

const store = configureStore({
  reducer: {
    Rocket: RocketSlice,
  },
});

export default store;
