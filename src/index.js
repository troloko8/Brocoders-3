import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    < App />
    < App />
  </div>, document.getElementById('root'));

serviceWorker.unregister();
// serviceWorker.unregister();