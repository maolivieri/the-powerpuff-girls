import styled from "styled-components";

interface ContainerProps {
  color: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  background-image: ${({ color }) => `linear-gradient(#ffffff, ${color})`};
  max-height: 100vh;
`;

export const Body = styled.div`
  max-width: 1200px;
  width: 60vw;
  margin: 2rem auto;
`;
