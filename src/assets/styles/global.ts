import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, 'Helvetica Neue', sans-serif;

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
        background-color: ${defaultTheme.background};
        -webkit-font-smoothing: antialiased
    }

    h1 {
        font-size: 3rem;
        color: ${defaultTheme.titleColor};
    }

    border-style, input, text-area, button, label, p{
        font-weight: 400;
        font-size: 2.5rem;
    }

    input {
    height: 6rem;
    border-radius: 5px;
    border: 1px solid ${defaultTheme.mediumTint};
    box-shadow: 1px 1px 1px 1px ${defaultTheme.ShadowColorRgbaLight};
    padding: .5rem 0 0 1.5rem;

    &:focus {
      border: 1px solid ${defaultTheme.primaryTint};
      outline: none;
    }
    }

    label {
        color: ${defaultTheme.mediumTint};
    }
`;
