 import React from 'react';
 import RowButtons from './RowButtons/RowButtons';

 class TableHead extends React.Component {

  render() {
  return (
    <thead className="table__head">
      <RowButtons
       addCell={this.props.addCell}
       addRow={this.props.addRow}
       minusCell={this.props.minusCell}
       minusRow={this.props.minusRow}
       state={this.props.state}
       />
    </thead>
  )}
}

export default TableHead; 