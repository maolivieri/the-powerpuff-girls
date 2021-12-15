import { FC } from "react";
import { Container, Title, Name } from "./style";

interface NetworkProps {
  name: string;
}

const Network: FC<NetworkProps> = ({ name }) => {
  return (
    <Container>
      <Title>Network:</Title>
      <Name>{name}</Name>
    </Container>
  );
};

export { Network };
