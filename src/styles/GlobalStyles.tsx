import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { theme } from './Theme';
import check_off from '../assets/images/icons/check_off.svg';
import check_on from '../assets/images/icons/check_on.svg';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --point-color: ${theme.colors.point};
          --check-off: url(${check_off});
          --check-on: url(${check_on});
        }

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

        label:has(input[type='checkbox']:checked) {
          span {
            color: #ccc;
            text-decoration: line-through;
          }
        }

        input[type='checkbox'] {
          display: none;
        }

        label > div {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          cursor: pointer;
          background: #fff var(--check-off) no-repeat center center;
          background-size: 10px;
          transition: all 0.3s;
        }

        input[type='checkbox']:checked + div {
          background: var(--point-color) var(--check-on) no-repeat center center;
          border-color: transparent;
          background-size: 10px;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
}
