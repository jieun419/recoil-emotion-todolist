import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        @font-face {
          font-family: 'GmarketSansMedium';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
          color: '#233868';
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          color: #333;
        }

        *,
        *::after,
        *::before {
          font-family: 'GmarketSansMedium';
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          background-color: #fff;
          overflow: hidden;
        }
        ul,
        li {
          list-style: none;
        }

        button {
          background-color: transparent;
          border: 0;
          cursor: pointer;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
}
