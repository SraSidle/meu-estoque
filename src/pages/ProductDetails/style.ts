import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

export const SContainer = styled.div`
  .button-back {
    position: relative;
    top: 5rem;
    left: 5rem;
  }
`;

export const SProductDetailsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
`;

export const SProductDetails = styled.div`
  width: 150rem;
  height: auto;
  min-height: 70vh;
  background-color: ${defaultTheme.ShadowColorRgbaLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 1px 2px ${defaultTheme.ShadowColorRgbaMedium};

  div {
    .product-image {
      width: 60rem;
      border-radius: 1rem;
      box-shadow: 1px 1px 2px 2px ${defaultTheme.ShadowColorRgbaMedium};
    }
  }
`;

export const STextContainer = styled.div`
  display: flex;
  gap: 10rem;

  div {
    button {
      width: 25rem;
      margin: 0 2rem;
      img {
        width: 2.5rem;
        margin-right: 1rem;
      }
    }
  }

  p {
    color: ${defaultTheme.fabappwhitebrackgroundnavigationcolor};
  }
  span {
    color: ${defaultTheme.textColor};
  }

  .product-description {
    width: 70rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .button-container {
      display: flex;
    }

    .location {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 3rem;
      }
    }
  }
`;
