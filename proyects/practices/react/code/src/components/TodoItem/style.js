import styled from "styled-components";

export const ItemStyled = styled.li`
  display: flex;
  position: relative;
  width: 80%;
  height: auto;
  align-self: center;
  background-color: ${({bgColor}) => bgColor};
  list-style: none;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid ${({txtColor}) => txtColor};

  &:hover {
    background-color: ${({bgColor}) => bgColor + "cc"};
  }

  & span {
    width: 90%;
    height: 100%;
    font-size: 2rem;
    font-family: "Arial";
    cursor: default;
    align-self: center;
    color: ${({completed, txtColor, completedColor}) => completed ? completedColor : txtColor};
    text-decoration: ${({completed}) => completed ? "line-through" : "none"};
  }

  & button {
    font-family: "Arial";
    font-size: 2rem;
    font-weight: 900;
    border: none;
    background: none;
    cursor: pointer;

    &:first-child {
    /* Check button */
      position: relative;
      width: 10%;
      height: 100%;
      left: -8px;
      align-self: center;
      color: ${({completed, completedColor, txtColor}) => completed ? completedColor : txtColor};
      text-shadow: 0px 0px 5px ${({completed, completedColor, txtColor}) => completed ? completedColor : txtColor};
    }

    &:last-child {
    /* Delete button */
      position: absolute;
      right: 5px;
      top: -15px;

      &:hover {
        color: #e33;
      }
    }
  }
`