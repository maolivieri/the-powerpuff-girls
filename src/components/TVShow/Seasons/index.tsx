import { FC } from "react";
import { Container, Season } from "./style";

interface SeasonsProps {
  seasons: { number: number }[];
  handleSeasonSelection: (season: number) => any;
}

const Seasons: FC<SeasonsProps> = ({ seasons, handleSeasonSelection }) => {
  return (
    <Container>
      {seasons.map((season) => (
        <div onClick={() => handleSeasonSelection(season.number)}>
          <Season>{`Season ${season.number}`}</Season>
        </div>
      ))}
    </Container>
  );
};

export { Seasons };
