 import React from 'react';

 const Button = (props) => {

   return (
     <td 
     className={`button ${props.styleName}`}
     onClick={props.click}
     style={ {visibility: props.visible , transform: `translate(${props.moveX * 100}%, ${props.moveY * 100}%)`}}
     >{props.name}</td>
   )
 }

  const RowButtons = (props) => {
   
   const addData = (e) => {
     props.addCell(e.target.closest('tr').children[3]);
   }

   const addRow = (e) => {
     props.addRow(e.target.closest('tr').children[2]);
   }

   const minusCell = (e) => {
     props.minusCell(e.target.closest('tr').children[3]);
   }

   const minusRow = (e) => {
     props.minusRow(e.target.closest('tr').children[2]);
   }
  
    return (
      <tr className="row-buttons">
        <Button name="+" styleName="button_plus-row " click={addRow}  />
        <Button name="+" styleName="button_plus-data" click={addData} />
        <Button
         name="-"
         visible={props.state.visibility} 
         moveX={0} 
         moveY={props.state.transformY} 
         styleName="button_minus-row button_minus" 
         click={minusRow} />
        <Button 
        name="-" 
        visible={props.state.visibility} 
        moveY={0} moveX={props.state.transformX} 
        styleName="button_minus-data button_minus" 
        click={minusCell} />
      </tr>
    )
  }

  export default RowButtons;