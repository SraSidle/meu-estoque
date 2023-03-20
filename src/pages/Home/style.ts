import styled from "styled-components";
import { defaultTheme } from "assets/styles/themes/default";

export const SHomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0 10rem 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const SHelloContainer = styled.div`
  display: flex;
  gap: 3rem;

  h1 {
    color: ${defaultTheme.mediumTint}
  }

  .date {
    color: ${defaultTheme.ShadowColorRgbaMedium}
  }

`;

export const STopContainer = styled.div`
  width: 100%;
  height: 15rem;
  margin: 0 0 10rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${defaultTheme.ShadowColorRgbaMedium};
  box-shadow: 6px 1px 2px 1px ${defaultTheme.ShadowColorRgbaLight};

  button {
    width: 30rem;
  }
`;

export const SGraphicContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const SDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`;
