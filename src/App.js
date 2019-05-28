/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';
import GlobalStyle from './styles/global';
import Map from './components/Map';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <GlobalStyle />
    <Map />
  </Provider>
);

export default App;
