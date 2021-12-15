import { FC, FormEvent, useState } from "react";
import {
  Container,
  Highlight,
  SearchWrapper,
  SearchBox,
  SearchButton,
  HighlightTitle,
  ShowBox,
  Highlights,
  HighlighImage,
  HighlighName,
  Title,
} from "./style";

import { FiSearch } from "react-icons/fi";
import { api } from "../../shared/api";
import { useNavigate } from "react-router-dom";

interface ShowsList {
  show: {
    name: string;
    id: number;
  };
}

const Home: FC = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ShowsList[]>([]);
  const navigate = useNavigate();
  // useEffect(() => {

  // }, [results]);

  const handleSarchSubmit = async () => {
    const { data: shows } = await api.get(`search/shows?q=${search}`);
    setResults(shows);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { data: shows } = await api.get(`search/shows?q=${search}`);
    setResults(shows);
  };

  return (
    <Container>
      <HighlightTitle>Highlights:</HighlightTitle>
      <Highlights>
        <Highlight onClick={() => navigate("/show/6771")}>
          <HighlighImage src='https://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg' />
          <HighlighName> The Powerpuff Girls</HighlighName>
        </Highlight>
        <Highlight onClick={() => navigate("/show/431")}>
          <HighlighImage src='https://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg' />
          <HighlighName> Friends</HighlighName>
        </Highlight>
        <Highlight onClick={() => navigate("/show/123")}>
          <HighlighImage src='https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg' />
          <HighlighName> Lost</HighlighName>
        </Highlight>
        <Highlight onClick={() => navigate("/show/66")}>
          <HighlighImage src='https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg' />
          <HighlighName> The Big Bang Theory</HighlighName>
        </Highlight>
      </Highlights>
      <Title>Search for your favourite shows</Title>
      <SearchWrapper onSubmit={handleSubmit}>
        <SearchBox
          onChange={(event) => setSearch(event.target.value)}
          type='text'
          placeholder='Search your favourite show..'
          name='search'
          value={search}
        />
        <SearchButton type='submit' onClick={handleSarchSubmit}>
          <FiSearch />
        </SearchButton>
      </SearchWrapper>
      {results.map((show) => (
        <ShowBox
          onClick={() => navigate(`/show/${show.show.id}`)}
          key={String(show.show.id)}
        >
          {show.show?.name}
        </ShowBox>
      ))}
    </Container>
  );
};

export { Home };
