import { FC, useState } from "react";
import { Container, Select, Option } from "./style";

interface SeasonsSelectorProps {
  seasons: {
    number: number;
  }[];
  selectedSeason: number;
  handleSeasonSelection: (season: number) => void;
}

const SeasonsSelector: FC<SeasonsSelectorProps> = ({
  seasons,
  selectedSeason,
  handleSeasonSelection,
}) => {
  const [seasonNumber, setSeasonNumber] = useState(selectedSeason);

  const handleOnChangeSelector = (event: any) => {
    console.log(event.target.value);
    setSeasonNumber(Number(event.target.value));
    handleSeasonSelection(Number(event.target.value));
  };

  return (
    <Container>
      <Select
        name='cars'
        id='cars'
        value={seasonNumber}
        onChange={handleOnChangeSelector}
      >
        {seasons.map((season) => (
          <Option value={season.number}>{`Season ${season.number}`}</Option>
        ))}
      </Select>
    </Container>
  );
};

export default SeasonsSelector;
