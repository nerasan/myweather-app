import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

reportWebVitals();
