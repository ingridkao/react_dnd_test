import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Container from './Container';
import * as serviceWorker from './serviceWorker';

import Board from './Board';

ReactDOM.render(
  // <React.StrictMode>
    <Board knightPosition={[7, 4]} />
  // </React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
