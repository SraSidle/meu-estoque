import styled from "styled-components";
import { defaultTheme } from "assets/styles/themes/default";

export const SPage = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
`;

export const StermsUse = styled.div`
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
