import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

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
`;
