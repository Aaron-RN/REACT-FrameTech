import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {InitializeFramework} from './js/arn-framework';
import favIcon from './images/FrameTech.ico';

const favIconLink = document.createElement('link');
favIconLink.setAttribute('rel', 'icon');
favIconLink.setAttribute('type', 'image/png');
favIconLink.setAttribute('href', favIcon);
document.querySelector('head').appendChild(favIconLink);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

InitializeFramework();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
