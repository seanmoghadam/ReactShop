import { createGlobalStyle } from "styled-components"

export const DrawerWidth = 250;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Spectral', serif;
  }
`;


export const btnReset = `
border: none;
margin: 0;
padding: 0;
background: transparent;
justify-self: end;

&:hover {
    cursor: pointer;
}

&:focus{
outline: none;
}`;
