import React, { FC } from "react";
import { Container, Number, Name, Duration, Background } from "./style";

interface EpisodeCardProps {
  number: number | string | null;
  name: string;
  duration: string | number | null;
  image: string;
}

const EpisodeCard: FC<EpisodeCardProps> = ({
  number,
  name,
  duration,
  image,
}) => {
  return (
    <Background image={image}>
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