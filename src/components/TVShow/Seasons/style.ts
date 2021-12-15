import styled, { css } from "styled-components";
import { device } from "../../../shared/breakpoints";

interface SeasonProps {
  active: boolean;
}

export const Container = styled.div`
  padding: 1.5rem 4vw;
  display: flex;
  flex-wrap: wrap;

  @media ${device.lg} {
    padding: 2rem 0 2rem 0;
  }
`;

export const Season = styled.div<SeasonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.7rem;
  border-radius: 20px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      background: rgba(12, 12, 12, 0.2);
    `}
`;
