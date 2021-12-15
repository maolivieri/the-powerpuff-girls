import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  cursor: pointer;

  border-radius: 20px;
  padding: 0.5rem 0.7rem;
  background: rgba(15, 15, 15, 0.3);
  border: 0px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border: 0px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const Option = styled.option`
  background: rgba(15, 15, 15, 0.3);
  border-radius: 25px;
`;
