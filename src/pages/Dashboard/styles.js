import styled from "styled-components";

export const ContainerPesquisa = styled.div`
  width: 80%;
  background-color: var(--purple);

  padding: 15px;
  border-radius: 8px;
  display: flex;
  margin: 4rem auto;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    background-color: var(--grey-0);
    color: var(--orange);
    border-radius: 8px;
  }

  input {
    width: 20vw;
    height: 2rem;

    border: 2px solid black;
    border-radius: 0.5rem;
    padding-left: 15px;
  }
`;
