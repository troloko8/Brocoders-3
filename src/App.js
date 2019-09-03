import React from 'react';
import './App.css';
import Table__head from './components/Table__head/Table__head';
import Table__body from './components/Table__body/Table__body';


const App = (props) => {

  return (
    <div className="wrapper">
    <table className="table">
      <Table__head 
        addCell={props.addCell}
        addRow={props.addRow}
        minusCell={props.minusCell}
        minusRow={props.minusRow}
        />
      <Table__body state={props.state} />
    </table>
  </div>
  );
}



export default App;
