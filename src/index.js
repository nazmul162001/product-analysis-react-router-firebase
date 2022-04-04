import React from 'react';
import './index.css';
import App from './App';
import ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

reportWebVitals();
