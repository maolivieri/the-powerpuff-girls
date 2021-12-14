import styled from "styled-components";

interface ContainerProps {
  image: string;
}

export const Background = styled.div<ContainerProps>`
  /* position: relative; */
  width: calc(6rem * 1.8);
  height: 6rem;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
  /* margin-right: 1rem; */
  overflow: hidden;
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.9rem 0.8rem;
  color: #ffffff;
`;

export const Number = styled.p``;

export const Name = styled.p`
  font-weight: 700;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Duration = styled.p``;
