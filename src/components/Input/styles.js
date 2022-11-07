import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 12px;

  input {
    min-width: 250px;
    border: 2px solid #A958B8;
    border-radius: 5px;
    background-color: transparent;
    max-width: 500px;
    color: #121214;
    padding: 6px;
    margin: 0px 5px 5px 0;

    &:focus-visible {
        outline: 3px solid #A958B8;
        border-radius: 5px;
        border-style: none;
        transition: 0.5s;
    }
    ::placeholder {
      color: #212529;
      font-size: 12px;
    }
  }

  svg {
    color: #f10;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;

  &:hover span {
    opacity: 1;
  }

  span {
    font-size: 14px;
    position: absolute;
    color: red;
    background-color: #ffffff;
    padding: 5px 15px;
    border-radius: 10px;
    left: 25px;
    top: -1px;
    opacity: 0.8;
    transition: opacity 0.4s;
    width: 245px;
  }
`;
