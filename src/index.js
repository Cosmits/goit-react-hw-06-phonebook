import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';

import './index.css';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

