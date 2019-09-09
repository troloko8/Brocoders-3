 import React from 'react';
 import RowButtons from './RowButtons/RowButtons';

 const TableHead = (props) => {
   return (
     <thead className="table__head">
       <RowButtons
        addCell={props.addCell}
        addRow={props.addRow}
        minusCell={props.minusCell}
        minusRow={props.minusRow}
        state={props.state}
        />
     </thead>
   )
 }

 export default TableHead;