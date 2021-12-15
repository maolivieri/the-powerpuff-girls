import styled from "styled-components";

export const Container = styled.div``;

export const BannerImage = styled.img`
  width: 100%;
`;
export const ContentBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const EpisodeDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SeasonAndEpisode = styled.p``;
export const Name = styled.p``;
export const Duration = styled.p``;
export const Airdate = styled.p``;
export const Summary = styled.div`
  width: 80%;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin-left: 2rem;
  padding: 0.6rem 0.8rem;
  border-radius: 20px;
  background: rgba(15, 15, 15, 0.3);
`;

export const Line = styled.div`
  display: block;
  min-width: 100%;
  border-bottom: solid 1px rgba(12, 12, 12, 0.6);
  margin-top: 1rem;
`;
