import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app';

const root = ReactDOM.createRoot(document.getElementById('root-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
