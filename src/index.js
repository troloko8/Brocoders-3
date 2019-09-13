import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './state'



ReactDOM.render(<App state={state} />, document.getElementById('root'));

serviceWorker.unregister();
