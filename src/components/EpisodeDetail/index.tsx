import { FC } from "react";
import ReactHtmlParser from "react-html-parser";

import {
  Container,
  BannerImage,
  ContentBody,
  EpisodeInfo,
  SeasonAndEpisode,
  Name,
  EpisodeDates,
  Duration,
  Airdate,
  ContentFooter,
  Summary,
  Button,
  Line,
} from "./style";

interface EpisodeProps {
  episode: {
    id?: number;
    name: string;
    summary: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    runtime: number;
    image: {
      original: string;
      medium: string;
    };
  };
}

const EpisodeDetail: FC<EpisodeProps> = ({ episode }) => {
  const { name, summary, season, number, airdate, runtime, image } = episode;

  const seasonNumber = season.toString().length === 1 ? `0${season}` : season;
  const episodeNumber = number.toString().length === 1 ? `0${number}` : season;

  return (
    <Container>
      <BannerImage src={image?.original} alt='episode banner' />
      <ContentBody>
        <EpisodeInfo>
          <SeasonAndEpisode>{`Season ${seasonNumber} | E${episodeNumber}`}</SeasonAndEpisode>
          <Name>{name}</Name>
        </EpisodeInfo>
        <EpisodeDates>
          <Duration>{runtime}</Duration>
          <Airdate>{airdate}</Airdate>
        </EpisodeDates>
      </ContentBody>
      <ContentFooter>
        <Summary>{ReactHtmlParser(summary)}</Summary>
        <Button>Watch Now</Button>
      </ContentFooter>
      <Line />
    </Container>
  );
};

export { EpisodeDetail };
