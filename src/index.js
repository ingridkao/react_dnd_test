import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Board from './Board';
import { observe } from './Game';

// ReactDOM.render(<Board knightPosition={[7, 4]} />,document.getElementById('root'));

//透過Game裡面的observe方法讓棋子到處動
observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, document.getElementById('root'))
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();