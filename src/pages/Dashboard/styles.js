import styled from "styled-components";

export const ContainerPesquisa = styled.div`
  width: 80%;
  background-color: red;
  display: flex;
  margin: 4rem auto;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }

  input {
    width: 20vw;
    height: 2rem;

    border: 2px solid black;
    border-radius: 0.5rem;
    padding-left: 15px;
  }
`;
