import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const RocketApi = createAsyncThunk('rocket/rocketapi', async () => {
  const res = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = res.json();
  return data;
});

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => ({
      rockets: state.rockets.map(
        (rock) => (rock.id !== action.payload ? rock : { ...rock, reserve: true }),
      ),
    }),
    cancel: (state, action) => ({
      rockets: state.rockets.map(
        (rock) => (rock.id !== action.payload ? rock : { ...rock, reserve: false }),
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(RocketApi.fulfilled, (state, action) => {
      const show = action.payload;
      return {
        rockets: show.map((rocket) => (
          {
            id: rocket.id,
            rocket_name: rocket.name,
            images: rocket.flickr_images,
            description: rocket.description,
            link: rocket.wikipedia,
            reserve: false,
          }
        )),
      };
    });
  },
});

export default rockets.reducer;
export const { reserve, cancel } = rockets.actions;
