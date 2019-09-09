import React from 'react';
import TableRow from './Table__row/Table__row';

const TableBody = (props) => {

  const tableElement = props.state.heightArray.map( row => <TableRow state={props.state} key={row.id} />)

  return (
    <tbody className="table__body">
      {tableElement}
  </tbody>
  )
}

export default TableBody;