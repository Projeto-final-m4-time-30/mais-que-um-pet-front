import styled from "styled-components";

export const ModalContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: var(--grey-0);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  figure {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
  /* div {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
  img {
    height: 200px;
  }

  .modal-info-pet {
    height: 100%;
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  button {
    background-color: transparent;
    border: none;
  }
`;
