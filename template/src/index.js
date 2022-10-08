import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { CustomTheme } from './theme/CustomTheme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}> {/* pass custom theme to share across entire app  */}
      <BrowserRouter> {/* BrowserRouter for routes using react-router-dom  */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

