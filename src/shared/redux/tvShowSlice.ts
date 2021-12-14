import { createSlice } from "@reduxjs/toolkit";

export const tvShowSlice = createSlice({
  name: "tvShow",
  initialState: {
    details: {
      id: 0,
      name: "",
      type: "",
      genres: [],
      language: "",
      network: {
        name: "",
      },
      image: {
        original: "",
        medium: "",
      },
      summary: "",
      updated: "",
      schedule: {
        time: "",
        days: [],
      },
    },
    episodes: [
      {
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
    ],
    seasons: [
      {
        number: 0,
      },
    ],
  },
  reducers: {
    loadTVShowDetails: (state, { payload }) => {
      state.details = payload;
    },
    loadTVShowEpisodes: (state, { payload }) => {
      state.episodes = payload;
    },
    loadTVShowSeasons: (state, { payload }) => {
      state.seasons = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadTVShowDetails, loadTVShowEpisodes, loadTVShowSeasons } =
  tvShowSlice.actions;

export default tvShowSlice.reducer;
