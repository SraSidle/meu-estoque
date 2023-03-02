import { defaultTheme } from "assets/styles/themes/default";
import styled from "styled-components";

export const SHamburguer = styled.div`
  top: 7rem;
  left: 1.5rem;
  width: 7rem;
  height: 0.5rem;
  background-color: white;
  position: absolute;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  z-index: 4;

  &::before {
    top: -1.5rem;
    content: "";
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 7rem;
    height: 0.5rem;
    background: white;
    z-index: 4;
  }

  &::after {
    top: 1.5rem;
    content: "";
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 7rem;
    height: 0.5rem;
    background: white;
  }
`;

export const SMenu = styled.div`
  .icon {
    position: absolute;
    z-index: 5;
    left: 1%;
    width: fit-content;
    width: 15rem;
    height: 10rem;
    transition: ease-in-out 0.7s;
    cursor: pointer;

    &:hover {
      transform: scale(1.025);
    }
  }

  .menu-open {
    width: 75rem;
    height: 100vh;
    background: ${defaultTheme.white};
    box-shadow: 10px 0px 69px 0px rgba(0, 0, 0, 0.59);
    position: absolute;
    z-index: 4;
  }

  .menu-close {
    display: none;
    width: 10rem;
  }

  .icon-active ${SHamburguer} {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
    left: 62rem;
    &:before {
      width: 5rem;
      top: 0;
      background: ${defaultTheme.primaryColor};
      transform: rotate(135deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    &:after {
      width: 5rem;
      top: 0;
      background: ${defaultTheme.primaryColor};
      transform: rotate(225deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const SList = styled.div`
  display: flex;
  flex-direction: column;
  left: 1%;
  padding: 15rem 0 0;
  flex-wrap: nowrap;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;

  ul {
    padding: 0;
    list-style: none;

    li {
      margin: 2rem;
      color: black;
      font-size: 3rem;
      &:hover {
        font-weight: 700;
      }
    }

    .line {
      width: 75rem;
      height: 1px;
      background-color: ${defaultTheme.medium};
    }
  }
`;
