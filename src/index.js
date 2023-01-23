import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { ContextProvider } from './Context/Context';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <Router>
        <App />
        </Router>
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);

