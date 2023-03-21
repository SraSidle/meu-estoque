import styled from "styled-components";
import { defaultTheme } from "assets/styles/themes/default";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;

  input {
    width: 75rem;
  }
`;

export const SProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 8rem 0;
`;

export const SProduct = styled.div`
  background-color: ${defaultTheme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50rem;
  height: 40rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 8px 2px ${defaultTheme.ShadowColorRgbaLight};

  &:hover {
    background-color: ${defaultTheme.light};
  }

  .container {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  p {
    span {
      color: ${defaultTheme.successRgb};
    }
  }

  .more-information {
    color: ${defaultTheme.primaryColor};
    cursor: pointer;

    &:hover {
      color: ${defaultTheme.primaryTint};
    }
  }

  img {
    width: 20rem;
    height: 20rem;
  }
`;
