import { FC } from "react";
import styled from "styled-components";

// casts: [
//   {
//     person: {
//       name: "",
//     },
//     character: {
//       name: "",
//     },
//   },
// ],

interface CastProps {
  values: {
    person: { name: string };
    character: { name: string };
  }[];
  title: string;
  type: "character" | "person";
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  font-weight: 700;
`;
const Cast = styled.p`
  white-space: pre-wrap;
`;

const Casts: FC<CastProps> = ({ title, values, type }) => {
  return (
    <Container>
      <Title>{`${title}:`}</Title>
      {values.map((value, index) =>
        index === 0 ? (
          <Cast>{`${value[type].name}`}</Cast>
        ) : index === values.length - 1 ? (
          <Cast> {`and ${value[type].name}`}</Cast>
        ) : (
          <Cast>{`, ${value[type].name}`}</Cast>
        )
      )}
    </Container>
  );
};

export default Casts;
