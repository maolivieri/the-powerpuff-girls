import { FC } from "react";
import { Container, Season } from "./style";

interface SeasonsProps {
  seasons: { number: number }[];
}

const Seasons: FC<SeasonsProps> = ({ seasons }) => {
  return (
    <Container>
      {seasons.map((season) => (
        <Season>{`Season ${season.number}`}</Season>
      ))}
    </Container>
  );
};

export { Seasons };
