import { FC } from "react";
import {
  Container,
  Number,
  Name,
  Duration,
  Background,
  SeeMore,
  Hover,
  Blur,
  SeeMoreButton,
} from "./style";

interface EpisodeCardProps {
  id: number;
  number: number | string | null;
  name: string;
  duration: string | number | null;
  image: string;
  handleEpisodeClick: (episodeId: number) => void;
}

const EpisodeCard: FC<EpisodeCardProps> = ({
  id,
  number,
  name,
  duration,
  image,
  handleEpisodeClick,
}) => {
  return (
    <Background image={image}>
      <Hover onClick={() => handleEpisodeClick(id)}>
        <Blur />
        <SeeMoreButton>
          <SeeMore>See More</SeeMore>
        </SeeMoreButton>
      </Hover>
      <Container>
        <Number>{number}</Number>
        <div style={{ paddingRight: "0.5rem" }}>
          <Name>{name}</Name>
          <Duration>{`${duration}min`}</Duration>
        </div>
      </Container>
    </Background>
  );
};

export { EpisodeCard };
