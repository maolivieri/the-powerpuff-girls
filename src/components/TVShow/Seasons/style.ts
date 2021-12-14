import styled, { css } from "styled-components";

interface SeasonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Season = styled.div<SeasonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
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
