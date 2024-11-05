import { css } from '@emotion/react';

export const globalStyles = css`
@font-face {
  font-family: 'Pretendard';
  src: url('/src/assets/fonts/Pretendard-Regular.woff2') format('woff2'),
       url('/src/assets/fonts/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6,
  p, pre, blockquote,
  ul, ol, dl,
  figure,
  hr {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
  }
`;