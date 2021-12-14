import { FC } from "react";
import { Container, Season } from "./style";

interface SeasonsProps {
  seasons: { number: number }[];
  handleSeasonSelection: (season: number) => any;
  selectedSeason: number;
}

const Seasons: FC<SeasonsProps> = ({
  seasons,
  handleSeasonSelection,
  selectedSeason,
}) => {
  return (
    <Container>
      {seasons.map((season) => (
        <div onClick={() => handleSeasonSelection(season.number)}>
          <Season
            active={selectedSeason === season.number}
          >{`Season ${season.number}`}</Season>
        </div>
      ))}
    </Container>
  );
};

export { Seasons };
