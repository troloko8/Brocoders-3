import React from 'react';
import s from './Table__body.module.css'
import Table__row from './Table__row/Table__row';

const Table__body = (props) => {

  let tableElement = props.state.heightArray.map( row => <Table__row state={props.state} />)

  return (
    <tbody className="table__body">
      {tableElement}
  </tbody>
  )
}

export default Table__body;