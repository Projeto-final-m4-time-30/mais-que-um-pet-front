import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        //gray scale pallete
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;


        --platinum: #E6E6E6;
        --gold: #d79d39;

        //feedback pallete
        --sucess: #3FE864;
        --negative: #E83F5B;

    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
      transition: all 0.5s linear;
    
        font-family: 'Montserrat', sans-serif;

    }

    button{
        cursor: pointer;
    }
    ol, ul, li {
	list-style: none;
    margin: 0;
	padding: 0;
	border: 0;
}
`;

export default GlobalStyle;
