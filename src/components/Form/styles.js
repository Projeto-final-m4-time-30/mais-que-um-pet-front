import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;

.divRow{
  display: flex;
  flex-direction: row;

  p{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 16px;
    color: #A958B8;
  }
}
  /* input {
    height: 45px;
    border-radius: 12px;
    background-color: #fff;

    color: #fff;
    box-shadow: 0 0 1em #08263d59;
  }  */

  /* select {
    height: 40px;
    border-radius: 12px;
    background-color: #08263d;
    opacity: 0.5;
    color: #fff;
    box-shadow: 0 0 1em #08263d59;
  } */

  /* h3 {
    font-size: 30px;
    color: #08263d;
  } */
  /* p {
    font-size: 14px;

    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      font-size: 14px;
    }
  } */
`;

export default Form;
