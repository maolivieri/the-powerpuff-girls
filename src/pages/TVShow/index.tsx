import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usePalette } from "react-palette";

import { api } from "../../shared/api";
import { AppDispatch, RootState } from "../../shared/redux/store";
import {
  loadTVShowDetails,
  loadTVShowEpisodes,
  loadTVShowSeasons,
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

export const TVShow: FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const { showId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { details, episodes, seasons } = useSelector(
    (state: RootState) => state.tvShow
  );

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
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    loadTVShow();
  }, [showId, dispatch]);

  const { data } = usePalette(details.image.original);

  const handleSeasonSelection = (season: number) => {
    setSelectedSeason(season);
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
                      duration={episode.runtime}
                      name={episode.name}
                      number={episode.number}
                      image={episode.image?.medium}
                    />
                  </div>
                ))}
            </div>
            <Footer></Footer>
          </Content>
        </Container>
      )}
    </>
  );
};
