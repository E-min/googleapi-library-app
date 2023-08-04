import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.5s ease-out;
   }
   html {
      font-size: 20px;
   }
   body {
      background-color: ${({ theme: {colors} }) => colors.primaryColor};
   }
   input, option, select, h2, a, button, p, label, h1, h4 {
    font-family: 'M PLUS Rounded 1c', sans-serif;
   }
   button:hover {
      cursor: pointer;
   }
   button:active {
      transform: scale(0.98, 0.98);
   }
`;

export default GlobalStyles;