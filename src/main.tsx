/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';
import GlobalStyles from './styles/GlobalStyles.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/Theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}> </ThemeProvider>
      <GlobalStyles />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
