import styled from "styled-components";
import { device } from "../../../shared/breakpoints";

export const Container = styled.div``;

export const BannerImage = styled.img`
  width: 100%;
`;
export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
  }
`;
export const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const EpisodeDates = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding: 0.3rem 0 1rem 0;

  @media ${device.md} {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const SeasonAndEpisode = styled.p``;

export const Name = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  width: 100%;
`;

export const Duration = styled.p`
  font-size: 1rem;

  span {
    font-weight: 700;
  }
`;

export const Airdate = styled.p`
  font-size: 1rem;

  span {
    font-weight: 700;
  }
`;

export const Summary = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 1rem;

  @media ${device.md} {
    width: 80%;
    margin-bottom: 0.3rem;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-left: 2rem;
  padding: 0.6rem 0.8rem;
  border-radius: 20px;
  background: rgba(15, 15, 15, 0.3);

  @media ${device.md} {
    width: 20%;
    margin-bottom: 0.3rem;
  }
`;

export const Line = styled.div`
  display: block;
  min-width: 100%;
  border-bottom: solid 1px rgba(12, 12, 12, 0.6);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
