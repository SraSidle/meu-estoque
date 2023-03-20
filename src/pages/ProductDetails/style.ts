import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

export const SProductDetails = styled.div`
    width: 100%;
    height: auto;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    position: relative;
    top: -5rem;

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

    .product-description {
        width: 70rem;
    }
`;