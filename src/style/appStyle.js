import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    html,
    body {
      height: 100%;
    }
    html {
      font-size: 10px;
    }
    body {      
      background: #ffc04c;
      background: linear-gradient(to top,#ffd27f 0%, #ffc04c 100%);
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    li {
      list-style-type: none;
    }
`;

export default GlobalStyles;
