import { FC } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";

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
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.p`
  font-weight: 700;
  margin-right: 0.2rem;
  justify-content: flex-start;
`;

const CastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: -1rem;
`;

const Casts: FC<CastProps> = ({ title, values, type }) => {
  const valuesStringArray = values.map((value, index) => {
    if (index === 0) {
      return `${value[type].name}`;
    } else if (index === values.length - 1) {
      return `and ${value[type].name}`;
    } else return `, ${value[type].name}`;
  });

  const castsString = valuesStringArray + "";

  return (
    <Container>
      <Title>{`${title}:`}</Title>
      <CastWrapper>
        <LinesEllipsis
          text={castsString}
          maxLine='1'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </CastWrapper>
    </Container>
  );
};

export default Casts;
