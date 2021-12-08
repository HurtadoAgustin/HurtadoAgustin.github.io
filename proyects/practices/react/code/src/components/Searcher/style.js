import styled from "styled-components";

export const SearcherStyled = styled.div`
  display: flex;
  margin: 15px auto;
  width: 65%;
  height: 60px;
  border: 1px solid #111;
  box-shadow: 0px 0px 30px -1px rgba(0,0,0,0.75);

  & input,
  & button {
    height: 100%;
    text-align: center;
    font-family: "Arial";
    font-size: 2rem;
    border: none;
  }

  & input {
    width: 60%;
    cursor: text;

    &::placeholder {
      color: rgb(150, 167, 150);
      font-weight: 600;
      font-size: 2rem;
    }

    &:hover {
      background-color: #eee;
    }
  }

  & button {
    width: 20%;
    border-left: 1px solid #111;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }

  & #filter--completed {
    color: ${({completed}) => (completed === "done") ? "green" : "black"};
    text-shadow: 0px 0px 5px ${({completed}) => (completed === "done") ? "rgba(7,223,19,0.94)" : "rgba(0,0,0,0.94)"};
    text-decoration: ${({completed}) => (completed === "false") ? "line-through" : "none"};
  }

  & #filter--group {
  }
`;