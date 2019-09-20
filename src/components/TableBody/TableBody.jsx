import React from 'react';
import TableRow from './TableRow/TableRow';
import PropTypes from 'prop-types';

const TableBody = (props) => {
  const tableElement = props.heightArray.map(row => <TableRow
    widthArray={props.widthArray}
    cellSize={props.cellSize}
    key={row.id} />)

  return (
    <tbody className="table__body">
      {tableElement}
    </tbody>
  )
}

TableBody.propTypes = {
  cellSize: PropTypes.number.isRequired,
  heightArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number).isRequired),
  widthArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number).isRequired),
}

export default TableBody;