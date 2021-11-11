import styled from "styled-components";

export const TodoListStyled = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  text-align: left;

  /* Loading and error */
  & p {
    display: flex;
    margin: 0 auto;
    padding-top: 20px;
    font-family: "Arial";
    cursor: default;
    font-weight: 500;
    font-size: 3rem;
    list-style: none;
    color: ${({error}) => error ? "red" : "black"};

    & b {
      margin-left: 5px;
      font-weight: bold;
      font-size: 3rem;
    }
  }
`;