import { configureStore } from "@reduxjs/toolkit";
import tvShowSlice from "./tvShowSlice";
import episodeDetailsSlice from "./episodeDetailsSlice";

const store = configureStore({
  reducer: {
    tvShow: tvShowSlice,
    episodeDatails: episodeDetailsSlice,
  },
});

export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
