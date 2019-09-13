 import React from 'react';

  const TableData = (props) => {

    let cellSize = props.state.cellSize;
    return (
     <td 
     className="table__data" 
     style={{width: cellSize + 'px', height: cellSize + 'px'}}
     >{props.id} </td>
    )
  }

 const TableRow = (props) => {

  const tableElement = props.state.widthArray.map( cell => <TableData state={props.state}  key={cell.id} />)

   return (
     <tr className="table__row">
       {tableElement}
     </tr>
   )
 }

 export default TableRow;