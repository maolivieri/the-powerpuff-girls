import { createSlice } from "@reduxjs/toolkit";

export const tvShowSlice = createSlice({
  name: "tvShow",
  initialState: {
    details: {
      name: "",
      type: "",
    },
    episodes: [],
  },
  reducers: {
    loadTVShowDetails: (state, { payload }) => {
      state.details = payload;
    },
    loadTVShowEpisodes: (state, { payload }) => {
      state.episodes = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadTVShowDetails, loadTVShowEpisodes } = tvShowSlice.actions;

export default tvShowSlice.reducer;
