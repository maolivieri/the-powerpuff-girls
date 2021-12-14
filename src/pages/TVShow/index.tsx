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

import { Loading } from "../../components/Loading";
import { Container, Content, ImageWrapper, Title } from "./style";
import { Schedule } from "../../components/Loading/TVShow/Schedule";
import { Network } from "../../components/Loading/TVShow/Network";
import { Summary } from "../../components/Loading/TVShow/Summary";
import { Seasons } from "../../components/Loading/TVShow/Seasons";

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
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    loadTVShow();
  }, [showId, dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
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
            <Seasons seasons={seasons} />
          </Content>
        </Container>
      )}
    </>
  );
};
