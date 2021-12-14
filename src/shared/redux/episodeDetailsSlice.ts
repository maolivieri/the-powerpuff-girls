import { createSlice } from "@reduxjs/toolkit";

export const episodeDetailsSlice = createSlice({
  name: "episodeDetails",
  initialState: [],
  reducers: {
    loadEpisodeDetails: (state, { payload }) => {
      state = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadEpisodeDetails } = episodeDetailsSlice.actions;

export default episodeDetailsSlice.reducer;
