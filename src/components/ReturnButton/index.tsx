import { FC } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface ReturnButtonProps {
  path: string;
  showPage: boolean;
}

interface PlacementProp {
  showPage: boolean;
}

const Container = styled.div<PlacementProp>`
  position: absolute;

  width: 1.5rem;
  height: 1.5rem;
  border-radius: 99rem;

  background: rgba(255, 255, 255, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  z-index: 9999;
  cursor: pointer;

  top: ${({ showPage }) => (showPage ? "3rem" : "3rem")};
  left: ${({ showPage }) =>
    showPage ? "calc(4vw + 0.8rem)" : "calc(4vw + 0.5rem)"};

  @media ${device.md} {
    top: ${({ showPage }) => (showPage ? "3.5rem" : "3rem")};
    left: ${({ showPage }) =>
      showPage ? "calc(4vw + 0.5rem)" : "calc(4vw + 3.5rem)"};
  }
  @media ${device.lg} {
    top: ${({ showPage }) => (showPage ? "4.8rem" : "3rem")};
    left: ${({ showPage }) => (showPage ? "calc(4vw + 1rem)" : "calc(4vw)")};
  }
`;

const Icon = styled(FiArrowLeft)`
  color: #000000;
  z-index: 999;
  font-size: 1.1rem;
`;

const ReturnButton: FC<ReturnButtonProps> = ({ path, showPage }) => {
  const navigate = useNavigate();
  return (
    <Container showPage={showPage} onClick={() => navigate(path)}>
      <Icon />
    </Container>
  );
};

export default ReturnButton;
