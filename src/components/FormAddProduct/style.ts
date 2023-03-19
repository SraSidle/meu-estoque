import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

export const SAddProductForm = styled.div`
  width: 75rem;
  min-height: 80rem;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 10rem;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
        margin-top: 2rem;
        margin-left: calc(50% - 10rem);
    }
  }
`;

export const STextAreaContent = styled.div`
  width: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  text-area {
    width: 60rem;
    max-width: 100%;
  }
`;
