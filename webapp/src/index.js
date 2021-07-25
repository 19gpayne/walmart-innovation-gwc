import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {WalmartIcon} from './walmart/walmarticon';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <WalmartIcon />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
