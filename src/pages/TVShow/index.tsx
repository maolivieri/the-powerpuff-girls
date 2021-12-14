import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { api } from "../../shared/api";
import { AppDispatch, RootState } from "../../shared/redux/store";
import {
  loadTVShowDetails,
  loadTVShowEpisodes,
  loadTVShowSeasons,
} from "../../shared/redux/tvShowSlice";

export const TVShow: FC = () => {
  const [loading, setLoading] = useState(true);
  const { showId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { details, episodes, seasons } = useSelector(
    (state: RootState) => state.tvShow
  );

  useEffect(() => {
    const loadTVShow = async () => {
      try {
        const { data: TVShowDetails } = await api.get(`shows/${showId}`);
        dispatch(loadTVShowDetails(TVShowDetails));
        const { data: TVShowSeasons } = await api.get(
          `shows/${showId}/seasons`
        );
        dispatch(loadTVShowSeasons(TVShowSeasons));
        const { data: TVShowEpisodes } = await api.get(
          `shows/${showId}/episodes`
        );
        dispatch(loadTVShowEpisodes(TVShowEpisodes));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadTVShow();
  }, [showId]);

  return (
    <>
      {loading ? (
        <div>
          <h1>LOADING....</h1>
        </div>
      ) : (
        <div>
          <h1>TVShow Page</h1>
          <h1>{details?.name}</h1>
          {episodes.map((episode) => (
            <h1>{episode.number}</h1>
          ))}

          {seasons.map((season) => (
            <h1>{season.number}</h1>
          ))}
        </div>
      )}
    </>
  );
};
