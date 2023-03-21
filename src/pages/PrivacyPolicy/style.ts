import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

export const SPrivacy = styled.div`
   width: 80%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-color: ${defaultTheme.white};
  border-radius: 1rem;
  box-shadow: 1px 1px 2px 1px ${defaultTheme.ShadowColorRgbaLight} ;
`;
