import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProSidebarProvider } from "react-pro-sidebar"
import { ColorModeProvider } from './ContextProviders/ColorModeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </ColorModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


