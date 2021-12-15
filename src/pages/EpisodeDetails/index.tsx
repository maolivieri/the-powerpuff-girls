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
import { EpisodeDetail } from "../../components/Episode/EpisodeDetail";
import EpisodePaper from "../../components/Episode/EpisodePaper";

import { Container, Body } from "./style";
import SeasonsSelector from "../../components/Episode/SeasonsSelector";
import ReturnButton from "../../components/ReturnButton";
import EpisodeDetailsSkeleton from "./Skeleton";

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
        const { data: episodeDetails } = await api.get(`episodes/${episodeId}`);
        dispatch(loadEpisodeDetails(episodeDetails));
        setSelectedSeason(episodeDetails.season);
      } catch (error) {
        navigate(`/show/${showId}`);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 200);
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
        }, 200);
      }
    };
    loadTVShow();
  }, [dispatch, navigate, showId]);

  const handleSeasonSelection = (season: number) => {
    setSelectedSeason(season);
  };

  return (
    <>
      {loading ? (
        <EpisodeDetailsSkeleton />
      ) : (
        <Container color={data.lightVibrant}>
          <ReturnButton path={`/show/${showId}`} />
          <Body>
            <EpisodeDetail episode={episode} />
            <SeasonsSelector
              handleSeasonSelection={handleSeasonSelection}
              seasons={seasons}
              selectedSeason={selectedSeason}
            />
            {episodes
              .filter((ep) => ep.season === selectedSeason)
              .map((episode) => (
                <EpisodePaper episode={episode} />
              ))}
          </Body>
        </Container>
      )}
    </>
  );
};
