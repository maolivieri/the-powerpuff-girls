import { FC, FormEvent, useState } from "react";
import {
  Container,
  Highlight,
  SearchWrapper,
  SearchBox,
  SearchButton,
  HighlightTitle,
  ShowBox,
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
      <HighlightTitle>Highlight:</HighlightTitle>
      <Highlight onClick={() => navigate("/show/6771")}>
        The Powerpuff Girls
      </Highlight>
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
