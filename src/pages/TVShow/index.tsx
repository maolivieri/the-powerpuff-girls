import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { usePalette } from "react-palette";

import { api } from "../../shared/api";
import { AppDispatch, RootState } from "../../shared/redux/store";
import { setEpisodeId } from "../../shared/redux/episodeDetailsSlice";
import {
  loadTVShowDetails,
  loadTVShowEpisodes,
  loadTVShowSeasons,
  loadTVShowCasts,
} from "../../shared/redux/tvShowSlice";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { Loading } from "../../components/Loading";
import { Container, Content, ImageWrapper, Title, Footer } from "./style";
import { Schedule } from "../../components/TVShow/Schedule";
import { Network } from "../../components/TVShow/Network";
import { Summary } from "../../components/TVShow/Summary";
import { Seasons } from "../../components/TVShow/Seasons";
import { EpisodeCard } from "../../components/EpisodeCard";
import ShowType from "../../components/TVShow/ShowType";
import Genres from "../../components/TVShow/Genres";
import Casts from "../../components/TVShow/Casts";

export const TVShow: FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const { showId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { details, episodes, seasons, casts } = useSelector(
    (state: RootState) => state.tvShow
  );
  const { data } = usePalette(details.image.original);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: "auto",
      spacing: 14,
    },
  });

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
        const { data: TVShowCast } = await api.get(`shows/${showId}/cast`);
        dispatch(loadTVShowCasts(TVShowCast));
      } catch (error) {
        navigate("/");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    loadTVShow();
  }, [showId, dispatch, navigate]);

  const handleSeasonSelection = (season: number) => {
    setSelectedSeason(season);
  };

  const handleEpisodeClick = (episodeId: number) => {
    try {
      dispatch(setEpisodeId(episodeId));
    } catch (error) {
    } finally {
      navigate(`episode`);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container color={data.lightVibrant}>
          <ImageWrapper>
            <img
              style={{ height: "100%" }}
              src={details.image.original}
              alt='show banner'
            />
          </ImageWrapper>
          <Content>
            <Title>{details.name}</Title>
            <div style={{ display: "flex" }}>
              <Network name={details.network?.name} />
              <Schedule schedule={details.schedule} />
            </div>
            <Summary summary={details.summary} />
            <Seasons
              seasons={seasons}
              selectedSeason={selectedSeason}
              handleSeasonSelection={handleSeasonSelection}
            />
            <div
              style={{ maxWidth: "100%" }}
              ref={sliderRef}
              className='keen-slider'
            >
              {episodes
                .filter((ep) => ep.season === selectedSeason)
                .map((episode) => (
                  <div
                    className='keen-slider__slide'
                    style={{ minWidth: "calc(6rem * 1.8)" }}
                  >
                    <EpisodeCard
                      id={episode.id}
                      duration={episode.runtime}
                      name={episode.name}
                      number={episode.number}
                      image={episode.image?.medium}
                      handleEpisodeClick={handleEpisodeClick}
                    />
                  </div>
                ))}
            </div>
            <Footer>
              <ShowType value={details.type} />
              <Genres genres={details.genres} />
              <Casts title='Characters' values={casts} type='character' />
              <Casts title='Cast' values={casts} type='person' />
            </Footer>
          </Content>
        </Container>
      )}
    </>
  );
};
