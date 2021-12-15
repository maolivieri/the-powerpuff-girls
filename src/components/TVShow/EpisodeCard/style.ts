import styled from "styled-components";

interface ContainerProps {
  image: string;
}

export const Background = styled.div<ContainerProps>`
  position: relative;
  width: calc(6rem * 1.8);
  height: 6rem;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
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
  padding: 0.8rem 0.8rem;
  color: #ffffff;
  z-index: 10;
`;

export const Number = styled.p`
  font-size: 1rem;
`;

export const Name = styled.p`
  font-weight: 700;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  padding-right: 0.8rem;
`;

export const Duration = styled.p`
  font-size: 0.9rem;
`;

export const Hover = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  border-radius: 20px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 101;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  backdrop-filter: blur(3px);
  transition: 0.2s;
`;

export const SeeMoreButton = styled.div`
  position: relative;
  padding: 0.4rem 0.7rem;
  border-radius: 25px;
  overflow: hidden;
  background: rgba(15, 15, 15, 0.5);
  z-index: 103;
  transition: 0.2s;
`;

export const SeeMore = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  z-index: 105;
  transition: 0.2s;
`;
