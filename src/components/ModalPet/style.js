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

  button {
    background-color: transparent;
    border: none;
  }

  figure {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-0);
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
    border-radius: 8px;
  }

  .modal-info-pet {
    height: 100%;
    width: 100%;
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;

    div > h2 {
      color: var(--grey-3);
    }
  }
  .info-pet {
    margin: 0 auto;
    margin-bottom: 20px;

    border-radius: 8px;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

    background-color: var(--purple);
    > span {
      color: var(--grey-0);
      font-weight: 500;
      font-size: 1.1rem;
    }
    > h2 {
      font-size: 2rem;
      margin-bottom: -20px;
    }
    > p {
      color: var(--grey-0);
      font-weight: 500;
      font-size: 1.1rem;
    }
    > div {
      display: flex;
      gap: 10px;

      span {
        background-color: var(--orange);
        color: var(--grey-3);
        padding: 5px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 1rem;
      }
    }
  }

  .button-close {
    position: absolute;
    top: 0;
    right: 0;

    .buttonX {
      width: 30px;
      height: 30px;

      color: var(--grey-2);
    }
  }
  .button-edit {
    position: absolute;
    top: 0;
    left: 0;

    .buttonE {
      width: 30px;
      height: 30px;

      color: var(--grey-2);
    }
  }
  .button-donate {
    position: absolute;
    left: 1;
    top: 0;
  }

  .contact {
    margin: 0 auto;
    margin-bottom: 20px;

    border-radius: 8px;
    width: 90%;
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

    background-color: var(--purple);

    > div {
      border-left: 4px solid var(--purple-hover);
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    div > div {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      width: 50%;

      color: var(--grey-0);
      font-size: 500;
    }
  }
  .contact-svg {
    width: 30px;
    height: 30px;

    color: var(--orange);
  }

  .form-edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .form-button-edit {
    background-color: var(--purple);
    color: var(--grey-0);
    padding: 10px;
    border-radius: 8px;
    font-weight: 500;

    &:hover {
      background-color: var(--purple-hover);
      transition: 0.5s;
    }
    &:active {
      transform: scale(0.97);
    }
  }
`;
