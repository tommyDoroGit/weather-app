import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    .mapboxgl-control-container {
        display: none;
    }
  }
`;

export default GlobalStyle;
