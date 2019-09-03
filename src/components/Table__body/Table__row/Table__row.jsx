 import React from 'react';
 import s from './Table__row.module.css'

  const Table__data = (props) => {
    let cellSize = props.state.cellSize;
    return (
     <td className="table__data" style={{width: cellSize + 'px', height: cellSize + 'px'}}></td>
    )
  }

 const Table__row = (props) => {
  
  let tableElement = props.state.widthArray.map( cell => <Table__data state={props.state} />)

   return (
     <tr className="table__row">
       {tableElement}
     </tr>
   )
 }

 export default Table__row;