import styled from "styled-components";
import { device } from "../../shared/breakpoints";

interface ContainerProps {
  color: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  background-image: ${({ color }) =>
    `linear-gradient(#ffffff, ${color} 50%, #FFFFFF 100%)`};
  background-repeat: repeat-y;
  background-position: fixed;
  background-size: 100vw 200vh;

  @media ${device.lg} {
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 2rem auto;
  /* overflow: scroll; */

  @media ${device.md} {
    width: 80vw;
  }

  @media ${device.lg} {
    width: 60vw;
  }
`;
