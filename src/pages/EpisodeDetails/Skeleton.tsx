import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Container = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 2rem auto;
  padding-top: 2rem;
  overflow: hidden;

  @media ${device.md} {
    width: 80vw;
  }

  @media ${device.lg} {
    width: 60vw;
  }
`;

const EpisodeDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
  }
`;

const MarginTopSM = styled.div`
  margin-top: 0.35rem;
`;

const MarginTopMD = styled.div`
  margin-top: 1rem;
`;

const EpisodeDetailsSkeleton = () => {
  return (
    <Container>
      <Skeleton height='50vh' />
      <EpisodeDetail>
        <div>
          <Skeleton height={25} width={200} />
          <Skeleton height={80} width={400} />
        </div>
        <div>
          <Skeleton height={25} width={250} />
          <Skeleton height={25} width={250} />
        </div>
      </EpisodeDetail>
      <Skeleton height={1} width='100vw' />
      <Skeleton height={25} width={200} />
      <MarginTopMD>
        <Skeleton height={100} width='100vw' />
      </MarginTopMD>
      <MarginTopSM>
        <Skeleton height={100} width='100vw' />
      </MarginTopSM>
    </Container>
  );
};

export default EpisodeDetailsSkeleton;
