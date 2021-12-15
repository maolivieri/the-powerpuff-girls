import { FC } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
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

  top: 3rem;
  left: calc(4vw + 0.5rem);

  @media ${device.md} {
    left: calc(4vw + 3.5rem);
  }
  @media ${device.lg} {
    left: calc(4vw);
  }
`;

const Icon = styled(FiArrowLeft)`
  color: #000000;
  z-index: 999;
  font-size: 1.1rem;
`;

interface ReturnButtonProps {
  path: string;
}

const ReturnButton: FC<ReturnButtonProps> = ({ path }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(path)}>
      <Icon />
    </Container>
  );
};

export default ReturnButton;
