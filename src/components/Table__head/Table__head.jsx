 import React from 'react';
 import s from './Table__head.module.css'
 import RowButtons from './RowButtons/RowButtons';

 const Table__head = (props) => {
   return (
     <thead className="table__head">
       <RowButtons
        addCell={props.addCell}
        addRow={props.addRow}
        minusCell={props.minusCell}
        minusRow={props.minusRow}
        />
     </thead>
   )
 }

 export default Table__head;