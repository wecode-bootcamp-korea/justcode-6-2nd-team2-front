import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
 }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    overflow: auto;
    overflow-y: scroll;
    letter-spacing: 0;
    line-height: 1.5;
    font-family: "NanumBarunGothic";
    font-size: 15px;
    color: #444;
  }
`;

export default GlobalStyle;
