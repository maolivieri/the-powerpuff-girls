import styled from "styled-components";
import { device } from "../../shared/breakpoints";

interface ContainerProps {
  color: string | undefined;
}

interface ImageProps {
  url: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: ${({ color }) => `linear-gradient(#ffffff, ${color})`};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  /* max-width: calc(100vw - 8vw); */
  min-height: 100vh;
  overflow-x: auto;
  /* overflow-x: hidden; */

  /* @media ${device.sm} {
    padding-left: 4vw;
    max-width: 100vw;
  } */

  @media ${device.lg} {
    /* max-width: 100vw; */
    /* width: 100vw; */
    padding-left: 4vw;
    align-items: flex-start;
    flex-direction: row;
    /* overflow-x: auto; */
  }
`;

export const ImageWrapper = styled.div<ImageProps>`
  max-width: calc(100vw - 8vw);
  /* width: 100%; */
  width: calc(100vw - 8vw);
  max-height: 40vh;
  height: 40vh;
  overflow: hidden;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  /* margin-left: 4vw; */
  /* margin-right: 4vw; */
  margin-top: 4vw;

  @media ${device.lg} {
    height: calc(100vh - 14vh);
    max-height: calc(100vh - 14vh);
    width: auto;
    overflow: visible;
    background-image: url();
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ShowImage = styled.img`
  max-width: 0;

  @media ${device.lg} {
    height: calc(100vh - 14vh);
    max-width: 50vw;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
  /* margin-left: 3vw; */
  /* overflow: auto; */

  @media ${device.lg} {
    overflow: auto;
    margin-left: 3vw;
  }
`;

export const Title = styled.h1`
  padding: 2rem 4vw;
  font-size: 3rem;
  line-height: 3rem;
  margin-top: 0;

  @media ${device.lg} {
    padding: 0;
    margin-top: 4vw;
    margin-right: 3vw;
  }
`;

export const Footer = styled.div`
  padding: 1rem 4vw;
  max-width: 90vw;

  @media ${device.lg} {
    padding: 1rem 0;
    margin-right: 3vw;
  }
`;

export const NetworkAndSchedule = styled.div`
  padding: 0rem 4vw 2rem 4vw;
  display: flex;
  flex-direction: column;

  @media ${device.lg} {
    padding: 2rem 0 2rem 0;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 3vw;
  }
`;

export const SliderWrapper = styled.div`
  max-width: calc(100vw - 4vw);
  margin-left: 4vw;

  @media ${device.lg} {
    margin-left: 0;
  }
`;
