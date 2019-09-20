import React from 'react';
import PropTypes from 'prop-types';

const TableData = (props) => {

  let cellSize = props.cellSize;
  return (
    < td
      className="table__data"
      style={{ width: cellSize + 'px', height: cellSize + 'px' }}
    ></td>
  )
}

TableData.propTypes = {
  cellSize: PropTypes.number.isRequired,
}

const TableRow = (props) => {

  const tableElement = props.widthArray.map(cell => <TableData
    cellSize={props.cellSize}
    key={cell.id} />)

  return (
    <tr className="table__row">
      {tableElement}
    </tr>
  )
}

TableRow.propTypes = {
  cellSize: PropTypes.number.isRequired,
  widthArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number).isRequired),
}

export default TableRow;
