import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .divButtonTitle{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    margin: 0 auto;
  }
 
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #343B41;
    font-weight: 700;
    margin-right: 50px;
  }

  .divButtonSubmit{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 40px;
  }
`;
