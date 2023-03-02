import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

export const SNavigateMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  transition: ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${defaultTheme.mediumTint};
  }
  img {
    width: 4rem;
    height: 4rem;
  }
`;
