import styled from "styled-components";

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    width: 50%;
    height: 400px;
    background-color: var(--grey-0);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: relative;

    figure {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
    }
    div {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    img {
      height: 200px;
    }
  }
  .button-close {
    position: absolute;
    top: 0;
    right: 0;
  }
  .button-edit {
    position: absolute;
    top: 0;
    left: 0;
  }
  .button-donate {
    position: absolute;
    left: 1;
    top: 0;
  }
`;
