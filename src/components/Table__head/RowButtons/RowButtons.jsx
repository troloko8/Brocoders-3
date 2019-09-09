 import React from 'react';
 import './RowButtons.css'


 const Button = (props) => {

   return (
     <td 
     className={`button ${props.styleName}`}
     onClick={props.click}
     style={ {visibility: props.visible , transform: `translate(${props.moveX * 100}%, ${props.moveY * 100}%)`}}
     ref={props.refer}
     >{props.name}</td>
   )
 }

 const RowButtons = (props) => {

  const rowMinus = React.createRef();
  const dataMinus = React.createRef();

  const addData = () => {
    props.addCell(dataMinus);
  }

  const addRow = () => {
    props.addRow(rowMinus);
  }

  const minusCell = () => {
    props.minusCell(dataMinus);
  }

  const minusRow = () => {
    props.minusRow(rowMinus);
  }
  
   return (
     <tr className="row-buttons">
       <Button name="+" styleName="button_plus-row " click={addRow}  />
       <Button name="+" styleName="button_plus-data" click={addData} />
       <Button
        refer={rowMinus}
        name="-"
        visible={props.state.visibility} 
        moveX={0} 
        moveY={props.state.transformY} 
        styleName="button_minus-row button_minus" 
        click={minusRow} />
       <Button 
       refer={dataMinus}
       name="-" 
       visible={props.state.visibility} 
       moveY={0} moveX={props.state.transformX} 
       styleName="button_minus-data button_minus" 
       click={minusCell} />
     </tr>
   )
 }

 export default RowButtons;