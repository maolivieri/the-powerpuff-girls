import { Routes, Route } from "react-router-dom";
import "./app.css";

import { TVShow } from "./pages/TVShow";
import { EpisodeDetails } from "./pages/EpisodeDetails";
import { Page404 } from "./pages/404";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<TVShow />} />
      <Route path='/show/:showId' element={<TVShow />} />
      <Route path='/show/:showId/episode' element={<EpisodeDetails />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
