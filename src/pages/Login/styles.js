import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 100vw;
  height: 100vh;

  .divLogin {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #343B41;
    font-weight: 700;
  }

  span {
    color: red;
    font-size: 14px;
  }

  .divButtonSubmit{
    padding: 5px;
    width: 100vw;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
