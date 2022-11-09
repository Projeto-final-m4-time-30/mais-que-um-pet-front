import styled from "styled-components";

export const ListCards = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;
  gap: 2rem;
`;
export const Card = styled.li`
  border: 4px solid #b0b3b6;
  border-radius: 5px;
  width: 200px;
  height: 250px;
  transition: all 0.6s;
  display: flex;
  flex-direction: column;
  align-content: center;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    border: 2px solid rgb(207, 207, 207);
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
  }
  h2 {
    display: flex;
    font-size: 16px;
  }

  figure {
    width: 100%;
    border: none;
    height: 10rem;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const DivBotao = styled.div`
  button {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 300;
    height: 35px;
    width: 90%;
    background-color: #a958b8;
    border: none;
    border-radius: 5px;
    color: aliceblue;

    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    transition: all 0.6s;

    :hover {
      box-shadow: inset 200px 0 0 0 #eb78fffd;
      color: white;
      cursor: pointer;
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
