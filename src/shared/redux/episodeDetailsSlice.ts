import { createSlice } from "@reduxjs/toolkit";

export const episodeDetailsSlice = createSlice({
  name: "episodeDetails",
  initialState: {
    episode: {
      id: 0,
      name: "",
      summary: "",
      season: null,
      number: null,
      airdate: "",
      airtime: "",
      runtime: 0,
      image: {
        original: "",
        medium: "",
      },
    },
    episodeId: null,
  },
  reducers: {
    loadEpisodeDetails: (state, { payload }) => {
      state.episode = payload;
    },
    setEpisodeId: (state, { payload }) => {
      state.episodeId = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadEpisodeDetails, setEpisodeId } = episodeDetailsSlice.actions;

export default episodeDetailsSlice.reducer;
