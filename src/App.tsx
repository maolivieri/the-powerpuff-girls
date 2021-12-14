import { Routes, Route } from "react-router-dom";

import { TVShow } from "./pages/TVShow";
import { EpisodeDetails } from "./pages/EpisodeDetails";
import { Page404 } from "./pages/404";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<TVShow />} />
      <Route path='/show/:showId' element={<TVShow />} />
      <Route
        path='/show/:showId/episode/:episodeId'
        element={<EpisodeDetails />}
      />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
