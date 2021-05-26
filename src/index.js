import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {Provider} from "react-redux";
import './sass/main.scss';
import './css/main.css';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
  // <Provider store={store}>
  //     <App/>
  // </Provider>

  document.getElementById('root')
);

