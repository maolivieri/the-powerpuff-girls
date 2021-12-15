import { FC } from "react";
import styled from "styled-components";

interface GenresProps {
  genres: string[];
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  margin-right: 0.2rem;
  text-overflow: ellipsis;
`;
const Genre = styled.p`
  font-size: 0.8rem;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

const Genres: FC<GenresProps> = ({ genres }) => {
  return (
    <Container>
      <Title>Show Type:</Title>
      {genres.map((genre, index) =>
        index === 0 ? (
          <Genre>{`${genre}`}</Genre>
        ) : index === genres.length - 1 ? (
          <Genre> {`and ${genre}`}</Genre>
        ) : (
          <Genre>{`, ${genre}`}</Genre>
        )
      )}
    </Container>
  );
};

export default Genres;
