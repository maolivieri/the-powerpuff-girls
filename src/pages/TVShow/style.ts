import styled from "styled-components";

interface ContainerProps {
  color: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 7vh;
  padding-bottom: 7vh;
  padding-left: 4vw;
  background-image: ${({ color }) => `linear-gradient(#ffffff, ${color})`};
`;

export const ImageWrapper = styled.div`
  height: calc(100vh - 14vh);
`;

export const Content = styled.div`
  flex: 1;
  max-width: 100%;
  margin-left: 3vw;
`;

export const Title = styled.h1``;

export const Footer = styled.div``;
