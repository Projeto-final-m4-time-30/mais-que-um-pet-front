import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 6rem;
  background-color: rgba(169, 88, 184, 1);
  color: white;

  div {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 2rem;

    nav {
      display: flex;

      img {
        width: 3rem;
        border-radius: 50%;
        cursor: pointer;
      }

      button {
        padding: 0.5rem 1rem;
        border: unset;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: color 0.3s ease-in-out, box-shadow 0.5s ease-in-out;

        &:hover {
          box-shadow: inset 200px 0 0 0 black;

          color: white;
        }
      }
    }
  }
`;
