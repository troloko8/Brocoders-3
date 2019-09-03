import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addCell} from './state'
import {addRow} from './state'
import {minusCell} from './state'
import {minusRow} from './state'


export let renderEntireTree = (state) => {
  ReactDOM.render(<App 
    state={state}
    addCell={addCell}
    addRow={addRow}
    minusCell={minusCell}
    minusRow={minusRow}
      />, document.getElementById('root'));
}
