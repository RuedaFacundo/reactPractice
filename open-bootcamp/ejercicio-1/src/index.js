import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createAppStore } from './store/config/storeConfig' 
import { Provider } from 'react-redux'

let appStore = createAppStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
