import styled from "styled-components";
import { device } from "../../../shared/breakpoints";

export const ExpandedText = styled.div`
  padding: 0rem 4vw 0rem 4vw;
  text-overflow: ellipsis;

  @media ${device.lg} {
    padding: 0;
    margin-right: 3vw;
  }
`;
export const Text = styled.div`
  padding: 0rem 4vw 0rem 4vw;

  @media ${device.lg} {
    padding: 0;
    margin-right: 3vw;
  }
`;
