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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  cursor: pointer;
`;

export const Highlights = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const HighlightTitle = styled.h3`
  text-align: center;
  flex: 1;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  text-align: center;
  flex: 1;
  margin-bottom: 1rem;
`;

export const HighlighName = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
`;

export const HighlighImage = styled.img`
  width: 80%;
  margin-bottom: 0.3rem;
  flex: 1;
`;

export const SearchWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.input`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 0.3rem 0.8rem;
  border: none;
  flex: 1;
  height: 2rem;
  box-shadow: 0px 5px 8px rgba(15, 15, 15, 0.15);
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.3rem;
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 15, 15, 0.8);
  border: none;
  height: 2rem;
  width: 2rem;
  margin-left: -1px;
  color: #fff;
  cursor: pointer;
  border-radius: 9999px;

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
  border-radius: 30px;

  &:hover {
    background: rgba(200, 200, 200, 0.2);
  }
`;
