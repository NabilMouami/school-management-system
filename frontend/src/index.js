import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import './index.css';
import App from './App';
import userReducer from '../src/redux/userSlice'
const store = configureStore({
  reducer: {
    studentinfo: userReducer,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
