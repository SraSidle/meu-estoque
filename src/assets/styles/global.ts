import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    @media (max-width: 599px) {
	html {
		font-size: 1vw;
	}
}
@media (min-width: 600px) and (max-width: 1022px) {
	html {
		font-size: 0.7vw;
	}
}
@media (min-width: 1023px) {
	html {
		font-size: 0.8vh;
	}
}
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px gray;
    }
    body{
        -webkit-font-smoothing: antialiased
    }
    h1 {
        font-size: 5rem;
    }
    border-style, input, text-area, button{
        font-family: sans-serif;
        font-weight: 400;
        font-size: 2rem;
    }
`;
