import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

const gradient = `${defaultTheme.primary}, ${defaultTheme.primaryShade}, ${defaultTheme.headerColor}, ${defaultTheme.headerColorrgb}, ${defaultTheme.primaryColororBlack}, ${defaultTheme.primary}, ${defaultTheme.primaryShade}`;

export const SFooter = styled.footer`
  width: 100%;
  height: 35rem;
  background-image: linear-gradient(${gradient});
  gap: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    color: ${defaultTheme.fontColor};
  }
`;
