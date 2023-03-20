import { defaultTheme } from "assets/styles/themes/default";
import styled, { keyframes } from "styled-components";

const showWarningModal = keyframes`
    0% {
        left: -100vw;
    }
    100% {
        left: 0;
    }
`;

export const SWarnningModal = styled.div`
    width: 100%;
    height: 100vh;
    background: ${defaultTheme.ShadowColorRgbaLight};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 9999;
    left: 0;
    animation: ${showWarningModal} 1s ease-in-out;

    &.modal-close {
        display: none;
    }

    .container-warnning {
        width: 60rem;
        height: 35rem ;
        padding: 3rem;
        background: ${defaultTheme.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 1rem;
        position: relative;
        top: -5rem;

        .button-container {
            display: flex;
            gap: 5rem;
        }
    }
`;