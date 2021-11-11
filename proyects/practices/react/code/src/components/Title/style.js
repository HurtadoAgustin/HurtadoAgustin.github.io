import styled from "styled-components";

export const TitleStyled = styled.header`
  width: 100%;
  text-align: center;
  padding: 15px 0;
  cursor: default;

  & h1 {
    font-family: Arial;
    font-weight: 600;
    font-size: 4rem;
  }

  & h2 {
    font-family: Arial;
    font-weight: 500;
    font-size: 3rem;
    & b{
      color: #222;
    }
  }
`;