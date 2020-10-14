import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "./_assets/plugins/keenthemes-icons/font/ki.css";
// import "socicon/css/socicon.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_assets/plugins/flaticon/flaticon.css";
import "./_assets/plugins/flaticon2/flaticon.css";
// Datepicker
// import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
