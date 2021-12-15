import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEpisodeId } from "../../../shared/redux/episodeDetailsSlice";
import { AppDispatch } from "../../../shared/redux/store";
import { PaperImage } from "../PaperImage";
import {
  Container,
  Number,
  Name,
  Summary,
  Runtime,
  Details,
  Head,
} from "./style";

interface EpisodeProps {
  episode: {
    id: number;
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

const EpisodePaper: FC<EpisodeProps> = ({ episode }) => {
  const { image, number, name, summary, runtime, id } = episode;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleEpisodeClick = (episodeId: number) => {
    try {
      dispatch(setEpisodeId(episodeId));
    } catch (error) {
    } finally {
      navigate(``);
    }
  };

  return (
    <Container>
      <PaperImage
        image={image?.medium}
        handleEpisodeClick={handleEpisodeClick}
        id={id}
      />
      <Details>
        <Head>
          <Number>{number}</Number>
          <Name>{name}</Name>
          <Runtime>{runtime}</Runtime>
        </Head>
        <Summary>{summary}</Summary>
      </Details>
    </Container>
  );
};

export default EpisodePaper;
