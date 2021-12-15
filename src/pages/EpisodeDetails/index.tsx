import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../shared/api";
import { AppDispatch, RootState } from "../../shared/redux/store";
import { usePalette } from "react-palette";
import {
  loadTVShowEpisodes,
  loadTVShowSeasons,
} from "../../shared/redux/tvShowSlice";
import { loadEpisodeDetails } from "../../shared/redux/episodeDetailsSlice";
import { EpisodeDetail } from "../../components/EpisodeDetail";
import EpisodePaper from "../../components/EpisodeDetail/EpisodePaper";

import { Container, Body } from "./style";

export const EpisodeDetails: FC = () => {
  const { episodes, seasons } = useSelector((state: RootState) => state.tvShow);
  const { episode, episodeId } = useSelector(
    (state: RootState) => state.episodeDatails
  );
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState(episode.season);
  const { showId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = usePalette(episode.image.original);

  useEffect(() => {
    const loadEpisode = async () => {
      try {
        const { data: EpisodeDetails } = await api.get(`episodes/${episodeId}`);
        dispatch(loadEpisodeDetails(EpisodeDetails));
      } catch (error) {
        navigate(`/show/${showId}`);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 10);
      }
    };
    loadEpisode();
  }, [showId, dispatch, navigate, episodeId]);

  useEffect(() => {
    const loadTVShow = async () => {
      try {
        const { data: TVShowSeasons } = await api.get(
          `shows/${showId}/seasons`
        );
        dispatch(loadTVShowSeasons(TVShowSeasons));
        const { data: TVShowEpisodes } = await api.get(
          `shows/${showId}/episodes`
        );
        dispatch(loadTVShowEpisodes(TVShowEpisodes));
      } catch (error) {
        navigate(`/show/${showId}`);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 10);
      }
    };
    loadTVShow();
  }, [dispatch, navigate, showId]);

  return (
    <Container color={data.lightVibrant}>
      <Body>
        <EpisodeDetail episode={episode} />
        {episodes.map((episode) => (
          <EpisodePaper episode={episode} />
        ))}
      </Body>
    </Container>
  );
};
