import styled from "styled-components";
import { device } from "../../shared/breakpoints";

export const Container = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 2rem auto;

  @media ${device.md} {
    width: 80vw;
  }

  @media ${device.lg} {
    width: 60vw;
  }
`;

export const Highlight = styled.div`
  margin: 0.2rem 2rem 2rem 2rem;
  text-align: center;
  flex: 1;
  cursor: pointer;
`;
export const HighlightTitle = styled.h3`
  text-align: center;
  flex: 1;
  width: 100%;
`;

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.input`
  flex: 1;
  height: 2rem;
`;

export const SearchButton = styled.button`
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 15, 15, 0.8);
  border: none;
  height: 2.3rem;
  width: 2.3rem;
  margin-left: -1px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(15, 15, 15, 0.5);
    color: #000;
  }
`;

export const ShowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(200, 200, 200, 0);
  padding: 0.5rem 0.8rem;
  cursor: pointer;

  &:hover {
    background: rgba(200, 200, 200, 0.2);
  }
`;
