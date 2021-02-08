import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();


render((
  <Provider store ={store} ><BrowserRouter>
    <App />
  </BrowserRouter></Provider>
), document.getElementById('root'));