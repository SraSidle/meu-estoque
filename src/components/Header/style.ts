import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

const gradient = `${defaultTheme.primary}, ${defaultTheme.primaryShade}, ${defaultTheme.headerColor}, ${defaultTheme.headerColorrgb}, ${defaultTheme.primaryColororBlack}`;

export const SHeader = styled.header`
  width: 100%;
  height: 15rem;
  background-image: linear-gradient(${gradient});
  box-shadow: 0 2px 5px 0 ${defaultTheme.ShadowColorRgbaMedium};
  display: flex;
  justify-content: flex-start;

  h1 {
    font-size: 5rem;
    color: ${defaultTheme.white};
    position: relative;
    left: calc(50% - 18rem);
    top: calc(50% - 4rem);
    z-index: 1;
  }
`;

