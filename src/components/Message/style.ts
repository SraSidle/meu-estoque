import { defaultTheme } from "assets/styles/themes/default";
import styled, { keyframes } from "styled-components";

const showContainer = keyframes`
    0% {
        right: -20rem;
    }
    10% {
        right: 5rem;
    }   
    15% {
        right: 6rem;
    }
    20% {
        right: 4rem;
    }
    25% {
        right: 6rem;
    }
    30% {
        right: 4rem;
    }
    35% {
        right: 6rem;
    }
    40% {
        right: 4rem;
    }
    45% {
        right: 6rem;
    }
    50% {
        right: 4rem;
    }
    55% {
        right: 6rem;
    }
    60% {
        right: 4rem;
    }
    65% {
        right: 6rem;
    }
    70% {
        right: 4rem;
    }
    75% {
        right: 6rem;
    }
    80% {
        right: 4rem;
    }
    90% {
        right: 5rem;
    }
    95% {
        right: -20rem
    }
    100% {
        right: -20rem
    }
`;

export const SMessage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
`;

export const SMessageContainer = styled.div`
  background: ${defaultTheme.white};
  color: ${defaultTheme.primaryColor};
  position: relative;
  width: 40rem;
  height: 10rem;
  padding: 1rem;
  top: 3rem;
  right: 5rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 2px 1px ${defaultTheme.ShadowColorRgbaLight};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${showContainer} 5.4s ease-in-out;
`;