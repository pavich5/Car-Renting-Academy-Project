import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CarInformationProvider } from './Contex/CarInformationContex.jsx';

ReactDOM.render(
  <BrowserRouter>
    <CarInformationProvider>
      <App />
    </CarInformationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
