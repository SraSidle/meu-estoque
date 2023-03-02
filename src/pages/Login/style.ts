import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

const gradient = `${defaultTheme.primary}, ${defaultTheme.primaryShade}, ${defaultTheme.headerColor}, ${defaultTheme.headerColorrgb}, ${defaultTheme.primaryColororBlack}`;

export const SLoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 2.5rem;
    a {
      color: ${defaultTheme.primaryTint};
      cursor: pointer;
    &:hover {
      color: ${defaultTheme.primaryShade};
    }
    }
  }
`;

export const SForm = styled.form`
  width: 70rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  label {
    position: relative;
    top: 4rem;
    left: -22rem;
  }

  input {
    width: 90%;
  }

  button {
    width: 20rem;
    height: 7.5rem;
    font-weight: 600;
    background-image: linear-gradient(${gradient});
    color: ${defaultTheme.headerColorcontrast};
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px ${defaultTheme.ShadowColorRgbaMedium};
    transition: ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(0.98);
    }
  }
`;
