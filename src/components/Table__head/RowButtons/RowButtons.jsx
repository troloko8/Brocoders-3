 import React from 'react';
 import './RowButtons.css'


 const Button = (props) => {

   return (
     <td 
     className={`button ${props.styleName}`}
     onClick={props.click}
     ref={props.ref}
     >{props.name}</td>
   )
 }

 const RowButtons = (props) => {

  let addData = () => {
    props.addCell();
  }

  let addRow = () => {
    props.addRow();
  }

  let minusCell = () => {
    props.minusCell();
  }

  let minusRow = () => {
    props.minusRow();
  }

  // let rowMinus = React.createRef();
  
   return (
     <tr className="row-buttons">
       <Button name="+" styleName="button_plus-row " click={addRow} />
       <Button name="+" styleName="button_plus-data" click={addData} />
       <Button name="-" styleName="button_minus-row button_minus" click={minusRow}  />
       <Button name="-" styleName="button_minus-data button_minus" click={minusCell} />
     </tr>
   )
 }

 export default RowButtons;