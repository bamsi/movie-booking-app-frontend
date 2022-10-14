import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>,
);
