import styled from "styled-components";

const AppStyled = styled.header`
  background-color: var(--purple);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 9%;
  padding: 10px;
  span {
    margin-left: 10%;
    color: var(--grey-0);
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 58px;
  }
`;

export default AppStyled;
