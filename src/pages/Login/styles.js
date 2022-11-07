import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  /* background-color: #3163ff; */


  .global-login-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    min-height: 100vh;
    border-radius: 5px;
    z-index: 0;
  }

  .modalLogin {
    max-width: 50vh;
    width: 90%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    gap: 1.5rem;
    /* box-shadow: 0 0 1em #08263d59; */
    z-index: 100;
    h3 {
      margin-bottom: 1rem;
      font-size: 30px;
      color: #08263d;
      font-weight: 700;
    }
  }

  .btnLogin {
    width: 100%;
  }

  p {
    font-size: 16px;
    /* color: #08263d; */
  }

  span {
    color: red;
    font-size: 14px;
  }

  input {
    width: 100%;
    /* box-shadow: rgba(43, 85, 190, 0.5); */
    border: none;
    background-color: #f5f5f5;
    color: #000000;
    padding-left: 0.6rem;
    ::placeholder {
      color: #000000;
    }
  }

`;
