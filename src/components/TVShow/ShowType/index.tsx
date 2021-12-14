import { FC } from "react";
import styled from "styled-components";

interface ShowTypeProps {
  value: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  font-weight: 700;
`;
const Description = styled.p`
  white-space: pre-wrap;
`;

const ShowType: FC<ShowTypeProps> = ({ value }) => {
  return (
    <Container>
      <Title>Show Type:</Title>
      <Description>{value}</Description>
    </Container>
  );
};

export default ShowType;
