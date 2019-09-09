import React from 'react';
import './App.css';
import TableHead from './components/Table__head/Table__head';
import TableBody from './components/Table__body/Table__body';


const App = (props) => {
const tableRef = React.createRef();

const tableFn = (e) => {
  const target = e.target,
   targetRow = e.target.closest('tr'),
   targetTable = e.target.closest('tbody'),
   index = tableRef.current.children[1].children.length,
   table = tableRef.current.className === 'table';
  props.moveButton(targetRow, targetTable, index, target, table)
}

  return (
    <div className="wrapper">
    <table className="table" ref={tableRef} onMouseMove={tableFn}>
      <TableHead 
        addCell={props.addCell}
        addRow={props.addRow}
        minusCell={props.minusCell}
        minusRow={props.minusRow}
        state={props.state}
        />
      <TableBody state={props.state} />
    </table>
  </div>
  );
}



export default App;
