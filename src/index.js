import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { HotelLayout } from './Hotels/components/';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HotelLayout />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
